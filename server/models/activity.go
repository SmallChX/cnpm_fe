package models

import (
	"time"
)

type Activity struct {
	ID       uint
	Type     string // Loạt hoạt động: Tình nguyện, hỗ trợ công tác khoa, dọn dẹp vệ sinh phòng máy,...
	MaxDay   int    `` // Ngày công tác xã hội tối đa
	MaxPoint int    `` // Điểm rèn luyện tối đa
	Location string
	// Thời gian
	StartRegistTime time.Time
	EndRegistTime   time.Time
	StartDay        time.Time
	EndDay          time.Time

	IsInspect         bool
	NeedMan           bool // Hoạt động yêu cầu giới tính nam
	MaxStudentsRegist int
	ParticiPant       string // Đối tượng tham gia

	Description string
	Criteria    string
	// Quản lý
	ManagerID   uint
	Manager     UserInfo `gorm:"foreignKey:ManagerID"`
	ContactInfo string
	Attendances []Attendance `json:"attendances" gorm:"foreignKey:ActivityID"`
	// Người tham dự - Many to many

}
