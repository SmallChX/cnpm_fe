package models

import ()

type Attendance struct {
	ID uint `gorm:"primaryKey;autoIncrement"`
	UserID uint
	ActivityID uint
	Checkin time.Time
	Checkout time.Time
	Rate int // Đánh giá mức độ hoàn thành công việc của sinh viên
}