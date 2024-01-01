package models

import (
	"gorm.io/gorm"
)

type ActivityNotifiCation struct {
	ID       uint   `gorm:"primaryKey;autoIncrement"`
	UserID uint
	ActivityID uint
	Title string
	Content string
}