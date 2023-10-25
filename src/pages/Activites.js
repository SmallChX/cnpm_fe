import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import ConfirmationWindow from '../components/ConfirmationWindow';

function ActivityListPage() {
    const activities = [
        { id: 1, name: 'Hoạt động A', value: '1 - 1,5', time: '8:00 AM 20/10/2023', place: 'BK.B6' },
        { id: 2, name: 'Hoạt động B', value: '1', time: '9:00 AM 20/10/2023', place: 'BK.B6' },
        { id: 3, name: 'Hoạt động C', value: '2', time: '10:00 AM 20/10/2023', place: 'BK.B6' },
        // Thêm các hoạt động khác vào đây
    ];

    const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    const handleDelete = () => {
        setShowConfirmation(true); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    };

    return (
        <div>
            <h2>Danh sách hoạt động</h2>
            <Link to="/create-activity">
                <button>Thêm hoạt động</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên hoạt động</th>
                        <th>Ngày CTXH</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>
                                <Link to={`/activity/${activity.id}`}>{activity.name}</Link>
                            </td>
                            <td>{activity.value}</td>
                            <td>{activity.time}</td>
                            <td><button onClick={handleDelete}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Hiển thị cửa sổ xác nhận nếu showConfirmation là true */}
            {showConfirmation && (
                <ConfirmationWindow
                    onConfirm={() => {
                        // Xử lý khi người dùng xác nhận xóa
                        setShowConfirmation(false); // Ẩn cửa sổ xác nhận
                    }}
                    onDeny={() => setShowConfirmation(false)} // Xử lý khi người dùng từ chối
                />
            )}

            <div>
                <button>Trang trước</button>
                <button>Trang sau</button>
            </div>
        </div>
    );
}

export default ActivityListPage;
