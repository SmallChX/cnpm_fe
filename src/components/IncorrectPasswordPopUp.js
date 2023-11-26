import React, { useState } from 'react';
import danger from '../image/danger.png';

function IncorrectPasswordPopup({ onConfirm, onDeny }) {
    return (
        <>
        <div class="overplay">
            <div class="popup  alert">
                <p class="popup_title">
                    <img class="danger-icon" src={danger} alt="danger-icon"/>
                </p>
                <div class="alert-container">
                    <p>Email hoặc mật khẩu không đúng!</p>
                    <p>Vui lòng nhập lại.</p>
                </div>
            </div>

        </div>
        </>
    );
}

export default IncorrectPasswordPopup;