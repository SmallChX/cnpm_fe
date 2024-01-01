package controllers

import (
	"cnpm/database"
	"cnpm/models"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Đăng nhập bằng mail

type UserLogin struct {
	Username string
	Password string
}

func loginHandler(c *gin.Context) {
	var userLogin UserLogin
	if err := c.BindJSON(&userLogin); err != nil {
		c.JSON(400, gin.H{"message": "Dữ liệu không hợp lệ"})
		return
	}

	var user models.UserAccount

	// Tìm người dùng trong cơ sở dữ liệu
	database.GetDB().Where("username = ?", userLogin.Username).First(&user)

	// Kiểm tra mật khẩu
	err := bcrypt.CompareHashAndPassword([]byte(userLogin.Password), []byte(user.Password))
	if err != nil {
		c.JSON(401, gin.H{"message": "Sai tên đăng nhập hoặc mật khẩu"})
		return
	}

	// Đăng nhập thành công
	c.JSON(200, gin.H{"message": "Đăng nhập thành công"})
}

func registerHandler(c *gin.Context) {
	var user UserLogin
	if err := c.BindJSON(&user); err != nil {
		c.JSON(400, gin.H{"message": "Dữ liệu không hợp lệ"})
		return
	}

	// Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(500, gin.H{"message": "Lỗi khi mã hóa mật khẩu"})
		return
	}

	user.Password = string(hashedPassword)

	// Lưu thông tin người dùng vào cơ sở dữ liệu
	database.GetDB().Create(&user)

	c.JSON(200, gin.H{"message": "Đăng ký thành công"})
}
