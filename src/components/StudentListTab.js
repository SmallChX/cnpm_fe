import React from 'react';
import '../style/systemPage.css';
import '../style/studentlisttab.css';
function StudentListTab() {
    // Giả sử bạn có một mảng chứa thông tin sinh viên
    const students = [
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Chủ hoạt động', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Chủ hoạt động', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' },
        { id: 1, name: 'Nguyen Van A', mssv: '123456', vaitro: 'Cộng tác viên', hoatdong: '10 phút trước' }
        // ...Thêm thông tin sinh viên khác tại đây
    ];

    return (
        <div class="row actcontent">
            <div class="containtable"> 
                <table class="table studentlist">
                    <thead>
                        <tr class="titlerow">
                            <th scope="col-1" className="sticky-header">STT</th>
                            <th scope="col-3" className="sticky-header">Họ và tên</th>
                            <th scope="col-2" className="sticky-header">MSSV</th>
                            <th scope="col-3" className="sticky-header">Vai trò</th>
                            <th scope="col-3" className="sticky-header">Hoạt động</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {students.map((student, index) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.mssv}</td>
                            <td>{student.vaitro}</td>
                            <td>{student.hoatdong}</td>
                        </tr>
                        ))}
                    </tbody> 
                
                </table>  
            </div>     
        </div>
    );
}

export default StudentListTab;
