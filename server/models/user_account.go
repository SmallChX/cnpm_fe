package models

import (
	"time"
)

type UserAccount struct {
	ID       uint
	Email    string
	Account  string
	Password string
	Role     string

	CreatAt     time.Time
	FirstSignin time.Time
}
