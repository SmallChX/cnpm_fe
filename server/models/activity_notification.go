package models

type ActivityNotifiCation struct {
	ID         uint `gorm:"primaryKey;autoIncrement"`
	UserID     uint
	ActivityID uint
	Title      string
	Content    string
	Reponse    string
}
