import React from 'react'

function RegisterActivityConfirmationPopup({ onConfirm }) {
    return (
        <div>
            <p>Bạn có chắc chắn muốn đăng ký hoạt động này không?</p>
            <button onClick={onConfirm}>Đồng ý</button>
            <button onClick={onConfirm}>Từ chối</button>
        </div>
    );
}

export default RegisterActivityConfirmationPopup;