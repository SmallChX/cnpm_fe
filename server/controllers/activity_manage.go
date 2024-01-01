package controllers

import ()

// QUẢN LÝ HOẠT ĐỘNG
// Tạo hoạt động, người tạo cũng là thành viên tham gia hoạt động (dễ quản lý)
// Sửa thông tin hoạt động (Các thông tin quan trọng của hệ thống như thời gian đăng ký, thời gian thực hiện) => chỉ áp dụng trong thời gian đăng ký
// Xóa hoạt động, gửi thông báo kèm nội dung, lý do cho người đã đăng ký.
// Duyệt thành viên (đối với hoạt động type duyệt thành viên), xóa thành viên
// Thông báo về việc đổi thành viên, có thảo luận mới
// In danh sách thành viên trong hoạt động