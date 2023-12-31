package database

import (
	"gorm.io/gorm"

	"cnpm/models"
)
// Migrate thực hiện migrate cơ sở dữ liệu
func Migrate() {
	// Thực hiện migrate cho các model cần thiết
	db.AutoMigrate(&models.UserAccount{})
	db.AutoMigrate(&models.Acitity{})
	db.AutoMigrate(&models.UserInfo{})
}