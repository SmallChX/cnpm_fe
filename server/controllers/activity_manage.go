package controllers

import (
	"cnpm/models"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"cnpm/database"
	"cnpm/repositories"
	token "cnpm/utils"
)

// QUẢN LÝ HOẠT ĐỘNG
// Tạo hoạt động, người tạo cũng là thành viên tham gia hoạt động (dễ quản lý)
// Sửa thông tin hoạt động (Các thông tin quan trọng của hệ thống như thời gian đăng ký, thời gian thực hiện) => chỉ áp dụng trong thời gian đăng ký
// Xóa hoạt động, gửi thông báo kèm nội dung, lý do cho người đã đăng ký.
// Duyệt thành viên (đối với hoạt động type duyệt thành viên), xóa thành viên
// Thông báo về việc đổi thành viên, có thảo luận mới
// In danh sách thành viên trong hoạt động

func CreateActivity(c *gin.Context) {
	db := database.GetDB()
	repo := repositories.NewRepository(db)

	// Bind dữ liệu JSON từ yêu cầu vào biến activity
	var activity models.Activity
	if err := c.BindJSON(&activity); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Dữ liệu không hợp lệ"})
		fmt.Print("lỗi 1")
		return
	}

	// Lấy ID của người tạo từ token
	createdByID, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Không có quyền truy cập"})
		fmt.Print("lỗi 2")
		return
	}

	// Gọi hàm để tạo hoạt động mới và quan hệ với người tạo
	err = repo.CreateActivity(&activity, createdByID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi tạo hoạt động"})
		fmt.Print("lỗi 3")
		return
	}

	// Trả về thông báo thành công
	c.JSON(http.StatusCreated, gin.H{"message": "Hoạt động đã được tạo thành công", "activity": activity})
}

func DeleteActivity(c *gin.Context) {
	db := database.GetDB()
	repo := repositories.NewRepository(db)

	// Lấy ID từ tham số URL
	idParam := c.Param("id")
	id, err := strconv.ParseUint(idParam, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID không hợp lệ"})
		return
	}

	// Gọi hàm để xóa hoạt động và gửi thông báo
	if err := repo.DeleteActivity(uint(id)); err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "Không tìm thấy hoạt động"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Lỗi khi xóa hoạt động"})
		}
		return
	}

	// Trả về thông báo thành công
	c.JSON(http.StatusOK, gin.H{"message": "Hoạt động đã được xóa thành công"})
}
