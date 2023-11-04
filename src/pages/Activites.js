import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logoBK.png';
import house from '../image/house.png';
import person from '../image/person.png';
import gear from '../image/gearshape.png';
import clock from '../image/clock.arrow.png';


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
            <div class="row">
                
                <div class="col-2 title-column">
                    <div class="logo-line">
                        <img class="logo-BK" src={logo} alt="logoBK" />
                        <div class="web-name">HUHU</div>
                    </div>

                    <div class="item-line">
                        <img class="item-logo" src={house} alt="House-icon" />
                        <Link to="" class="item-title">Trang chủ</Link>
                    </div>

                    <div class="item-line">
                        <img class="item-logo" src={person} alt="House-icon" />
                        <Link to="" class="item-title">Hoạt động</Link>
                    </div>

                    <div class="item-line">
                        <img class="item-logo" src={gear} alt="House-icon" />
                        <Link to="" class="item-title">Hệ thống</Link>
                    </div>

                    <div class="item-line">
                        <img class="item-logo" src={clock} alt="House-icon" />
                        <Link to="" class="item-title">Lịch sử</Link>
                    </div>
                    
                </div>

                <div class="col-10 content-column">
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
            </div>
        </div>
 
    );
}

export default ActivityListPage;
