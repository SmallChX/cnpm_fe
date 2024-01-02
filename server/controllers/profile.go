package controllers

import (
	"net/http"

	"cnpm/database"
	"cnpm/models"
	"cnpm/repositories"
	token "cnpm/utils"

	"github.com/gin-gonic/gin"
)

// Cập nhật thông tin hoạt động
// Khóa cứng các trường: MSSV, Mail, tên, lớp, ngành, khoa. => Muốn đổi cần phải yêu cầu manager của ngành
// Thay đổi các trường còn lại.
// Hiển thị danh sách các hoạt động đã tham gia, đang đăng ký/ tham gia.

func getUserInfo(c *gin.Context) {
	// Lấy thông tin người dùng từ token hoặc session, tùy thuộc vào cách bạn xác thực
	userID, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}
	db := database.GetDB()
	// Sử dụng repository để lấy thông tin người dùng
	userRepo := repositories.NewRepository(db)
	user, err := userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get user information"})
		return
	}

	// Trả về thông tin người dùng
	c.JSON(http.StatusOK, gin.H{"user": user})
}

func updateUser(c *gin.Context) {
	// Lấy thông tin người dùng từ token hoặc session, tùy thuộc vào cách bạn xác thực
	userID, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	// Kiểm tra xem người dùng có tồn tại không
	db := database.GetDB()
	userRepo := repositories.NewRepository(db)
	_, err = userRepo.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get user information"})
		return
	}

	// Bind dữ liệu cập nhật từ request
	var updatedUser models.UserInfo
	if err := c.BindJSON(&updatedUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// Cập nhật thông tin người dùng
	if err := userRepo.UpdateUser(userID, updatedUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user information"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User information updated successfully"})
}

func GetAllUsersHandler(c *gin.Context) {
	repo := repositories.NewRepository(database.GetDB())

	users, err := repo.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi lấy danh sách người dùng"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"users": users})
}
