// Trong component NewActivity.js
import React, { useState, useEffect } from 'react';

function NewActivity() {
    const [activityName, setActivityName] = useState('');
    const [activityValue, setActivityValue] = useState('');
    const [activityTime, setActivityTime] = useState('');
    const [activityPlace, setActivityPlace] = useState('');
    const [activityDetail, setActivityDetail] = useState('');

    useEffect(() => {
        const unloadListener = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', unloadListener);
        return () => {
            window.removeEventListener('beforeunload', unloadListener);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu hoạt động mới ở đây
    };

    const handleConfirmLeave = () => {
        const isConfirmed = window.confirm(
            'Bạn có muốn lưu thông tin hoạt động mới không trước khi rời khỏi trang?'
        );
    };

    return (
        <div>
            <h2>Tạo hoạt động mới</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên hoạt động:
                    <input
                        type="text"
                        value={activityName}
                        onChange={(e) => setActivityName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Giá trị:
                    <input
                        type="text"
                        value={activityValue}
                        onChange={(e) => setActivityValue(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Thời gian:
                    <input
                        type="text"
                        value={activityTime}
                        onChange={(e) => setActivityTime(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Địa điểm:
                    <input
                        type="text"
                        value={activityPlace}
                        onChange={(e) => setActivityPlace(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Chi tiết hoạt động:
                    <input
                        type="text"
                        value={activityDetail}
                        onChange={(e) => setActivityDetail(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Tạo hoạt động" />
            </form>
        </div>
    );
}

export default NewActivity;
