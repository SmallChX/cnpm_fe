import React, { useState } from 'react';
import ForgotPassword from '../components/ForgotPassword';

function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    return (
        <div>
            <div className="account">
                <label>Tài khoản:</label>
                <input type="text" placeholder="Username" required />
                <label>Mật khẩu:</label>
                <input type="password" placeholder="Password" required />
                <a href="#" onClick={handleForgotPassword}>
                    Quên mật khẩu
                </a>
            </div>
            <div className="google">
                <button>Đăng nhập với Google</button>
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