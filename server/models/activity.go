package models

import (
	"gorm.io/gorm"
	"time"
)

type Acitity struct {
	ID uint
	MaxDay int `` // Ngày công tác xã hội tối đa
	MaxPoint int `` // Điểm rèn luyện tối đa
	Location string 
	// Thời gian
	StartRegistTime time.Time
	EndRegistTime time.Time
	StartDay time.Time
	EndDay time.Time

	IsInspect bool
	MaxStudentsRegist int
	ParticiPant string // Đối tượng tham gia

	Description string
	Criteria string 
	// Quản lý
	ManagerID uint
	ContactInfo string
	// Người tham dự - Many to many
	Stundents UserInfo[] `gorm:"many2many:user_activities`

}