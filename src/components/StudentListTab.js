import React from 'react';

function StudentListTab() {
    // Giả sử bạn có một mảng chứa thông tin sinh viên
    const students = [
        { id: 1, name: 'Nguyen Van A', mssv: '123456', days: 5 },
        { id: 2, name: 'Tran Thi B', mssv: '234567', days: 3 },
        // ...Thêm thông tin sinh viên khác tại đây
    ];

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>MSSV</th>
                        <th>Số ngày</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.mssv}</td>
                            <td>{student.days}</td>
                            <td><button>Xóa thành viên</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentListTab;
