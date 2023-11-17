import React, { useState } from 'react';

import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';

import CancelPopup from '../components/CancelConfirm';

function HolderAccountListTab() {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmRegistration = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };

    const holderAccountList = [
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'},
        {holderID: '0000001', fullName: 'ABC EGF', role: 'Người tổ chức', accountState: 'Đang tham gia', accountActive: '10 phút trước'}
        
    ];

    return (
        <div class="row table-container  tab-table-container">
            {showConfirmation && <CancelPopup onConfirm={handleConfirmRegistration} />}
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

                        {holderAccountList.map((holder, index) => (
                            <tr>
                                <td>{holder.holderID}</td>
                                <td>{holder.fullName}</td>
                                <td>{holder.role}</td>
                                <td>{holder.accountState}</td>
                                <td>{holder.accountActive}</td>
                                <td scope="col" >
                                    <button class="btn btn btn-warning decent-buttons" onClick={() => setShowConfirmation(true)}>Huỷ quyền</button>
                                    
                                </td>
                            </tr>
                            ))}
                        
                    </table>

                </div>
            </div>
    )
}

export default HolderAccountListTab;