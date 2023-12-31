package models

import (
	"time"
	"gorm.io/gorm"
)

type UserAccount struct {
	ID uint 
	Email string
	Account string	
	Password string
	Role string
	
	CreatAt time.Time
	FirstSignin time.Time
}