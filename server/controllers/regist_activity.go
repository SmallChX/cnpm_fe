package controllers

import (
	"cnpm/database"
	"cnpm/models"
	token "cnpm/utils"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// ĐĂNG KÝ HOẠT ĐỘNG
// Hủy đăng ký hoạt động (chỉ đối với hoạt động type 'duyệt' mà chưa được host duyệt vào)
// Đổi người, đổi dựa vào mssv (đảm bảo tính chất yêu cầu của hoạt động)

func registerActivity(c *gin.Context) {
	// Lấy thông tin người dùng từ token hoặc session, tùy thuộc vào cách bạn xác thực
	userID, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	// Lấy ID hoạt động từ query parameter
	activityIDStr := c.Query("activity_id")
	if activityIDStr == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Activity ID is required"})
		return
	}

	// Chuyển đổi giá trị từ string sang uint
	activityID, err := strconv.ParseUint(activityIDStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Activity ID"})
		return
	}

	// Kiểm tra xem người dùng đã đăng ký hoạt động chưa
	if hasRegistered, err := hasUserRegistered(userID, uint(activityID)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to check registration"})
		return
	} else if hasRegistered {
		c.JSON(http.StatusConflict, gin.H{"error": "User has already registered for this activity"})
		return
	}

	// Thêm đăng ký hoạt động vào cơ sở dữ liệu
	if err := registerUserForActivity(userID, uint(activityID)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to register for the activity"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully registered for the activity"})
}

func hasUserRegistered(userID uint, activityID uint) (bool, error) {
	// Kiểm tra xem người dùng đã đăng ký cho hoạt động chưa
	var count int64
	if err := database.GetDB().
		Model(models.Attendance{}).
		Where("user_id = ? AND activity_id = ?", userID, activityID).
		Count(&count).
		Error; err != nil {
		return false, err
	}

	return count > 0, nil
}

func registerUserForActivity(userID uint, activityID uint) error {
	// Thêm đăng ký hoạt động vào cơ sở dữ liệu
	attendance := models.Attendance{
		UserID:     userID,
		ActivityID: activityID,
		Checkin:    time.Now(),
	}

	if err := database.GetDB().Create(&attendance).Error; err != nil {
		return err
	}

	return nil
}
