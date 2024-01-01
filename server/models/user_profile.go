package models

import (
	"gorm.io/gorm"
)

type UserInfo struct {
	ID uint
	Name string
	Major string
	Department string
	Class string
	PhoneNumber string
	StudentID string
	Mail string
	Sex bool

	// About activity

}