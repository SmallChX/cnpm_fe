import React from 'react';
import '../style/systemPage.css';
import '../style/UserHistory.css';

function UserHistoryTab() {
    // Giả sử bạn có một mảng chứa thông tin sinh viên
    const students = [
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' },
        { id: 1, name: 'Trực phát thiết bị...', time: '10:28:00 - 7 Th11 2023', status: 'Đăng ký thành công', exresult: '2 ngày CTXH', result: 'Chưa có' }
        // ...Thêm thông tin sinh viên khác tại đây
    ];

    return (
        <div class="row outer-box">
            <div class="content-table"> 
                <table class="table history-list">
                    <thead>
                        <tr class="titlerow">
                            <th scope="col-1" className="sticky-header">Mã số</th>
                            <th scope="col-3" className="sticky-header">Tên hoạt động</th>
                            <th scope="col-2" className="sticky-header">Thời gian đăng ký</th>
                            <th scope="col-3" className="sticky-header">Trạng thái</th>
                            <th scope="col-3" className="sticky-header">Kết quả dự kiến</th>
                            <th scope="col-2" className="sticky-header">Kết quả</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {students.map((student, index) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.time}</td>
                            <td>{student.status}</td>
                            <td>{student.exresult}</td>
                            <td>{student.result}</td>
                        </tr>
                        ))}
                    </tbody> 
                
                </table>  
            </div>     
        </div>
    );
}

export default UserHistoryTab;