package repositories

import (
	"cnpm/database"
	"cnpm/models"
)

// GetUserByID trả về thông tin người dùng dựa trên ID
func (r *Repository) GetUserByID(userID uint) (*models.UserInfo, error) {
	var user models.UserInfo
	if err := database.GetDB().First(&user, userID).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

// GetAllUsers trả về danh sách tất cả người dùng
func (r *Repository) GetAllUsers() ([]models.UserInfo, error) {
    var users []models.UserInfo
    if err := database.GetDB().Find(&users).Error; err != nil {
        return nil, err
    }

    return users, nil
}

// UpdateUser cập nhật thông tin người dùng trong cơ sở dữ liệu
func (r *Repository) UpdateUser(userID uint, updatedUser models.UserInfo) error {
    var existingUser models.UserInfo

    // Kiểm tra xem người dùng có tồn tại không
    if err := database.GetDB().First(&existingUser, userID).Error; err != nil {
        return err
    }

    // Cập nhật thông tin người dùng	
    existingUser.Username = updatedUser.Username
    existingUser.Email = updatedUser.Email
    existingUser.FullName = updatedUser.FullName

    // Lưu thay đổi vào cơ sở dữ liệu
    if err := database.GetDB().Save(&existingUser).Error; err != nil {
        return err
    }

    return nil
}