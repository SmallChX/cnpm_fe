package controllers

import (
	"cnpm/database"
	"cnpm/models"
	"cnpm/repositories"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// getActivitiesForStatus là một hàm giả định để lấy 3 hoạt động theo trạng thái
func getActivitiesForStatus(repo *repositories.Repository, status string) ([]models.Activity, error) {
	activities, err := repo.GetFirst3ActivitiesWithStatus(status)
	if err != nil {
		fmt.Printf("Lỗi khi lấy hoạt động cho trạng thái %s: %v\n", status, err)
		return nil, err
	}

	return activities, nil
}

func GetFirst3ActivitiesWithStatus(c *gin.Context) {
	db := database.GetDB()
	repo := repositories.NewRepository(db)

	// Gửi yêu cầu và nhận hoạt động cho mỗi trạng thái
	activities1, err1 := getActivitiesForStatus(repo, "Đã diễn ra")
	activities2, err2 := getActivitiesForStatus(repo, "Đang diễn ra")
	activities3, err3 := getActivitiesForStatus(repo, "Sắp diễn ra")

	if err1 != nil || err2 != nil || err3 != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi lấy hoạt động"})
		return
	}

	// Gửi danh sách hoạt động cho frontend
	response := map[string]interface{}{
		"Old":      activities1,
		"Ongoing":  activities2,
		"Upcoming": activities3,
	}

	c.JSON(http.StatusOK, response)
}

func GetAllActivities(c *gin.Context) {
	db := database.GetDB()
	repo := repositories.NewRepository(db)

	// Gọi hàm để lấy toàn bộ hoạt động
	activities, err := repo.GetAllActivities()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi lấy hoạt động"})
		return
	}

	// Trả về danh sách hoạt động dưới dạng JSON
	c.JSON(http.StatusOK, activities)
}

func GetActivityByID(c *gin.Context) {
	db := database.GetDB()
	repo := repositories.NewRepository(db)

	// Lấy ID từ tham số URL
	idParam := c.Param("id")
	id, err := strconv.ParseUint(idParam, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID không hợp lệ"})
		return
	}

	// Gọi hàm để lấy hoạt động dựa trên ID
	activity, err := repo.GetActivityByID(uint(id))
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "Không tìm thấy hoạt động"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi lấy hoạt động"})
		}
		return
	}

	// Trả về hoạt động dưới dạng JSON
	c.JSON(http.StatusOK, activity)
}
