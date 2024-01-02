package controllers

import (
	"cnpm/database"
	"cnpm/models"
	token "cnpm/utils"
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// ĐĂNG KÝ HOẠT ĐỘNG
// Hủy đăng ký hoạt động (chỉ đối với hoạt động type 'duyệt' mà chưa được host duyệt vào)
// Đổi người, đổi dựa vào mssv (đảm bảo tính chất yêu cầu của hoạt động)
type RegistrationRequest struct {
	ActivityID string `json:"activity_id"`
}

func RegisterActivity(c *gin.Context) {
	// Lấy thông tin người dùng từ token hoặc session, tùy thuộc vào cách bạn xác thực
	userID, err := token.ExtractTokenID(c)
	if err != nil {
		fmt.Print("lỗi 1")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	// Lấy ID hoạt động từ query parameter
	var req RegistrationRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Chuyển đổi giá trị từ string sang uint
	activityID, err := strconv.ParseUint(req.ActivityID, 10, 64)
	if err != nil {
		fmt.Print("Lỗi 3")
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
	// Tìm hoạt động bằng activityID
	var activity models.Activity
	if err := database.GetDB().First(&activity, activityID).Error; err != nil {
		return err
	}

	// Kiểm tra xem đã đủ số người tham gia chưa
	if activity.CurrentNumber >= activity.NumberOfPeople {
		return errors.New("activity is full")
	}

	// Tăng số lượng người tham gia hiện tại lên 1
	activity.CurrentNumber += 1

	// Cập nhật hoạt động trong cơ sở dữ liệu
	if err := database.GetDB().Save(&activity).Error; err != nil {
		return err
	}

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
