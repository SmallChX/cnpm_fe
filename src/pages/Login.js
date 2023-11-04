import React, { useState } from 'react';
import '../bootstrap.min.css'
import '../style/login.css';
import ForgotPassword from '../components/ForgotPassword';

import gmail from '../image/gmail-logo.jpg';

function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    return (
        <div class="body-container">
            <div class="welcome-quote">
                Chào mừng đến với HUHU!
            </div>

            <div class="login-title">
                ĐĂNG NHẬP
            </div>

            <div>
                <input class="form-control-lg" type="text" placeholder="Tên đăng nhập" required />
                <input class="form-control-lg" type="password" placeholder="Mật khẩu" required />
                <button type="button" class="btn btn-dark">Đăng nhập</button>
            </div>

            <div class="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                    Quên mật khẩu?
                </a>
            </div>

            <div className="google">
                <div>Hoặc đăng nhập với</div>
                <button class="gmail">
                    <img class="gmail-image" src={gmail}/>
                </button>
            </div>
            {showForgotPassword && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowForgotPassword(false)}>
                            &times;
                        </span>
                        <ForgotPassword />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;