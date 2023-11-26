import React, { useState } from 'react';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';
import '../style/act_detail.css';
import DecentPopUp from './DecentConfirm';

function StudentAccountListTab() {
    const studentAccountList = [
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {studentID: '0000001', fullName: 'ABC EGF', role: 'Sinh viên', accountState: 'Đang tham gia', accountActive: '10 phút trước'}
    ];

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirm = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };


    return (
        <div class="row table-container tab-table-container ">
            {showConfirmation && <DecentPopUp onConfirm={handleConfirm} />}
                <div class="table-responsive activity-roll tab">
                    <table class="table tab-table">
                        <col class="column-1" />
                        <col class="column-7" />
                        <col class="column-7" />
                        <col class="column-7" />
                        <col class="column-7" />
                        <col class="column-7" />

                        <tr>
                            <th scope="col" class="id">MSSV</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Vai trò </th>
                            <th scope="col">Trạng thái </th>
                            <th scope="col">Hoạt động</th>
                            <th scope="col">Thay đổi</th>
                            
                        </tr>

                        {studentAccountList.map((account, index) => (
                            <tr>
                                <td >{account.studentID}</td>
                                <td>{account.fullName}</td>
                                <td>{account.role}</td>
                                <td>{account.accountState}</td>
                                <td>{account.accountActive}</td>
                                <td>
                                    <button class="btn btn-success decent-buttons" onClick={() => setShowConfirmation(true)}>Phân quyền</button>
                                    
                                </td>
                            </tr>
                            )
                        )}
                        
                        
                    </table>

                </div>
        </div>
    )
}

export default StudentAccountListTab;