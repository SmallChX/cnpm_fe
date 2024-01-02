package controllers

import (
	"cnpm/database"
	"cnpm/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthorizeAccountHandler(c *gin.Context) {
	var request struct {
		UserID uint `json:"user_id"`
	}

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db := database.GetDB()
	var user models.UserAccount

	if err := db.First(&user, request.UserID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Đảo vai trò người dùng từ 'student' sang 'manager' và ngược lại
	if user.Role == "student" {
		user.Role = "manager"
	} else if user.Role == "manager" {
		user.Role = "student"
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User role is not valid for this operation"})
		return
	}

	if err := db.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error updating user role"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User role updated successfully"})
}
