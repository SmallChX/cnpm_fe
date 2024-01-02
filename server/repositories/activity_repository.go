package repositories

import (
	"cnpm/models"
)

// GetFirst3ActivitiesWithStatus là hàm để lấy 3 hoạt động theo trạng thái
func (r *Repository) GetActivitiesWithStatus(status string) ([]models.Activity, error) {
	// Thực hiện truy vấn hoặc lấy dữ liệu từ cơ sở dữ liệu bằng cách sử dụng r.db
	// Thay thế dòng này bằng logic thực tế của ứng dụng của bạn
	var activities []models.Activity
	if err := r.db.Table("activities").Where("status = ?", status).Find(&activities).Error; err != nil {
		return nil, err
	}

	return activities, nil
}

// GetAllActivities là hàm để lấy toàn bộ hoạt động từ cơ sở dữ liệu
func (r *Repository) GetAllActivities() ([]models.Activity, error) {
	var activities []models.Activity
	if err := r.db.Find(&activities).Error; err != nil {
		return nil, err
	}

	return activities, nil
}

// GetActivityByID là hàm để lấy hoạt động dựa trên ID
func (r *Repository) GetActivityByID(id uint) (*models.Activity, error) {
	var activity models.Activity
	if err := r.db.First(&activity, id).Error; err != nil {
		return nil, err
	}

	return &activity, nil
}

// CreateActivity là hàm để tạo một hoạt động mới và quan hệ với người tạo
func (r *Repository) CreateActivity(activity *models.Activity, createdByUserID uint) error {
	// Kiểm tra xem người tạo có tồn tại không
	var createdByUser models.UserInfo
	if err := r.db.First(&createdByUser, createdByUserID).Error; err != nil {
		return err
	}

	activity.ManagerID = createdByUserID
	// Lấy thông tin người dùng dựa trên createdByID
    user, err := r.GetUserByID(createdByUserID)
    if err != nil {
        return err
    }

    // Thêm tên người tạo vào activity
    activity.ManagerName = user.Name // Giả sử tên trường là 'Name' trong models.UserInfo

	// Tạo hoạt động và quan hệ với người tạo
	if err := r.db.Create(activity).Error; err != nil {
		return err
	}

	return nil
}

// DeleteActivity là hàm để xóa hoạt động và gửi thông báo cho tất cả các thành viên đăng ký
func (r *Repository) DeleteActivity(activityID uint) error {
	// Lấy thông tin hoạt động và danh sách thành viên đăng ký
	var activity models.Activity
	if err := r.db.Preload("Attendances").First(&activity, activityID).Error; err != nil {
		return err
	}

	// Xóa hoạt động
	if err := r.db.Delete(&activity).Error; err != nil {
		return err
	}

	// Gửi thông báo cho tất cả các thành viên đăng ký
	for _, attendance := range activity.Attendances {
		notification := models.SystemNotification{
			SenderID:   0, // ID của hệ thống hoặc người gửi thông báo
			ReceiverID: attendance.UserID,
			Content:    "Hoạt động bạn đã đăng ký đã bị hủy.",
		}

		// Thêm thông báo vào cơ sở dữ liệu
		if err := r.db.Create(&notification).Error; err != nil {
			// Xử lý lỗi khi gửi thông báo (có thể log hoặc thực hiện các bước khác)
		}
	}

	return nil
}