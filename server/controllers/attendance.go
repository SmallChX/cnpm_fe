package controllers

import (
	"cnpm/database"
	"cnpm/repositories"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// ĐIỂM DANH
// Điểm danh bằng cách nhập mssv
// Nếu lần đầu là checkin, điểm danh lại là checkout. Có xác nhận và từ chối.
// Sau khi điểm danh (check out) hiển thị đánh giá thành viên (1 -> 5*).

// Điểm danh bằng QR, Barcode
// Xử lý thành MSSV rồi điểm danh như trên

func GetUserListByActivityID(c *gin.Context) {

	db := database.GetDB()
	repo := repositories.NewRepository(db)
	// Lấy ID hoạt động từ query parameter
	
	idParam := c.Param("id")


	// Chuyển đổi ID hoạt động từ string sang uint
	activityID, err := strconv.ParseUint(idParam, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Activity ID"})
		return
	}

	// Gọi hàm repository để lấy danh sách người dùng dựa trên ID hoạt động
	userList, err := repo.GetUserListByActivityID(uint(activityID))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve user list"})
		return
	}

	// Trả về danh sách người dùng
	c.JSON(http.StatusOK, gin.H{"user_list": userList})
}
