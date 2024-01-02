package controllers

import (
	"cnpm/database"
	"cnpm/models"
	"cnpm/utils"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Đăng nhập bằng mail

type UserLogin struct {
	Username string
	Password string
}

func LoginHandler(c *gin.Context) {
	var userLogin UserLogin
	if err := c.BindJSON(&userLogin); err != nil {
		c.JSON(400, gin.H{"message": "Dữ liệu không hợp lệ"})
		return
	}

	var user models.UserAccount

	// Tìm người dùng trong cơ sở dữ liệu
	database.GetDB().Where("username = ?", userLogin.Username).First(&user)

	// Kiểm tra mật khẩu
	if userLogin.Password != user.Password {
		c.JSON(401, gin.H{"message": "Sai tên đăng nhập hoặc mật khẩu"})
		return
	}

	utils.CreateToken(c, user.ID, user.Role)
	// Đăng nhập thành công
	c.JSON(200, gin.H{"message": "Đăng nhập thành công"})
}

func RegisterHandler(c *gin.Context) {
	var user models.UserAccount
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

func Logout(c *gin.Context) {
	// Xóa cookie chứa token
	c.SetCookie("authToken", "", -1, "/api", "", true, true)

	c.JSON(http.StatusOK, gin.H{"message": "logout successful"})
}

// HandleGetRole là hàm xử lý cho route "/api/get-role"
func HandleGetRole(c *gin.Context) {
    // Kiểm tra authtoken
    if !utils.CheckAuthToken(c) {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
        return
    }

    // Trích xuất role từ authtoken
    role, err := utils.ExtractTokenRole(c)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
        return
    }

    // Gửi role về frontend
    c.JSON(http.StatusOK, gin.H{"role": role})
}