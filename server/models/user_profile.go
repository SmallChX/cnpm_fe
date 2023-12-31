package models

import (
	"gorm.io/gorm"
)

type UserInfo struct {
	ID uint
	Name string
	Major string
	Class string
	PhoneNumber string
	StudentID string
	Mail string

	// About activity
	A	ctivites []Acitity `gorm:"many2many:user_activities`
}