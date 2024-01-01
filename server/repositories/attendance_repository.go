package repositories

import (
	"cnpm/models"
)

// GetAttendancesByActivityID là hàm để lấy danh sách tham gia hoạt động dựa trên ID hoạt động
func (r *Repository) GetAttendancesByActivityID(activityID uint) ([]models.Attendance, error) {
	var attendances []models.Attendance
	if err := r.db.Where("activity_id = ?", activityID).Find(&attendances).Error; err != nil {
		return nil, err
	}

	return attendances, nil
}
