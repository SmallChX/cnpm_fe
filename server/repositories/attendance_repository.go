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

// GetUserListByActivityID trả về danh sách người dùng dựa trên ID hoạt động
func (r *Repository) GetUserListByActivityID(activityID uint) ([]models.UserInfo, error) {
	// Lấy danh sách tham gia hoạt động bằng cách gọi hàm GetAttendancesByActivityID
	attendances, err := r.GetAttendancesByActivityID(activityID)
	if err != nil {
		return nil, err
	}

	// Tạo một map để lưu danh sách người dùng duy nhất (loại bỏ bản sao)
	userMap := make(map[uint]models.UserInfo)

	// Lặp qua danh sách tham gia và thêm thông tin người dùng vào map
	for _, attendance := range attendances {
		// Kiểm tra xem người dùng đã tồn tại trong map chưa, nếu chưa thì thêm vào
		if _, exists := userMap[attendance.UserID]; !exists {
			// Lấy thông tin người dùng từ ID người dùng trong danh sách tham gia
			userInfo, err := r.GetUserByID(attendance.UserID)
			if err != nil {
				return nil, err
			}
			// Thêm người dùng vào map
			userMap[attendance.UserID] = *userInfo
		}
	}

	// Chuyển map thành slice để trả về danh sách người dùng
	var userList []models.UserInfo
	for _, userInfo := range userMap {
		userList = append(userList, userInfo)
	}

	return userList, nil
}

