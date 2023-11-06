import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logoBK.png';
import house from '../image/house.png';
import person from '../image/person.png';
import gear from '../image/gearshape.png';
import clock from '../image/clock.arrow.png';
import star from '../image/magic-star.png';
import location from '../image/location.png';
import time from '../image/clock.png';
import profile from '../image/profile-2user.png';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';


import ConfirmationWindow from '../components/ConfirmationWindow';

function ActivityAdminListPage() {
    const activities = [
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        // Thêm các hoạt động khác vào đây
    ];

    const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    const handleDelete = () => {
        setShowConfirmation(true); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    };

    return (
        // <div class="body-container">
            <div class="container-md row">  
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

                    <footer class="item-line">
                        <img class="item-logo" src={clock} />
                        <Link class="item-title">
                            Đăng xuất
                        </Link>
                    </footer>
                    
                </div>

                <div class="col content-column">
                    <div class ="row">
                        <div class ="col">
                            <button class="btn btn-primary arrow-button-container">
                                <img class="arrow-icon" src={leftArrow} />
                            </button>
                            <button  class="btn btn-primary arrow-button-container">
                                <img class="arrow-icon" src={rightArrow} />
                            </button>
                        </div>

                        {/* <div class="col-3 notification-container"> */}
                            <button class="btn btn-secondary arrow-button-container account-icon-container">
                                <img class="bell-icon" src={bell} alt="bell-icon"/>
                            </button>

                            <div class="user-account account-icon-container">
                            <img class="user-icon" src={user} />

                            <div class="user-infor">
                                <div class="user-name">Cinamon</div>
                                <div class="user-role">Admin</div>
                            </div>

                            <button class="btn btn-secondary vector-container">
                                <img  class="vector-icon" src={vector}/>
                            </button>
                        </div>

                        {/* </div> */}

                        
                    </div>

                    <div class ="row justify-content-end">
                        <Link to="/create-activity">
                            <button class="btn btn-dark btn-sm create-activity-button admin-create-activity-button">Tạo hoạt động</button>
                        </Link>
                    </div>

                    <div class ="row activity-state-title">
                        <div>Hoạt động của tôi</div>
                        <Link class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover see-all">Xem tất cả
                        </Link>
                    </div>

                    <div class="row activity-row">
                        {activities.map(activity => (
                            <div class="col-xxl-3 shadow-sm activity-cell">
                                <div class="activity-cell-title">
                                    <div class="activity-name">{activity.name}</div>
                                    <div class="current-quantity">{activity.currentQuantity}/{activity.quantity}</div>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={star} alt="Star icon" />
                                    <p> {activity.value} ngày CTXH </p>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={location} alt="Location icon" />
                                    <p> {activity.place} </p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={time} alt="Clock icon" />
                                    <p> {activity.time}</p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={profile} alt="Profile icon" />
                                    <p> {activity.quantity} Sinh viên </p>
                                </div>

                                <button class="btn btn-primary btn-sm detail-button">Chi tiết</button>
                            </div>
                        ))}

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
                    </div>

                    <div class ="row activity-state-title">
                        <div>Đang diễn ra</div>
                        <Link class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover see-all">Xem tất cả
                        </Link>
                    </div>

                    <div class="row activity-row">
                        {activities.map(activity => (
                            <div class="col-xxl-3 shadow-sm activity-cell">
                                <div class="activity-cell-title">
                                    <div class="activity-name">{activity.name}</div>
                                    <div class="current-quantity">{activity.currentQuantity}/{activity.quantity}</div>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={star} alt="Star icon" />
                                    <p> {activity.value} ngày CTXH </p>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={location} alt="Location icon" />
                                    <p> {activity.place} </p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={time} alt="Clock icon" />
                                    <p> {activity.time}</p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={profile} alt="Profile icon" />
                                    <p> {activity.quantity} Sinh viên </p>
                                </div>

                                <button class="btn btn-primary btn-sm detail-button">Tham gia</button>
                            </div>
                        ))}

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


                    </div>

                    <div class ="row activity-state-title">
                        <div>Sắp diễn ra</div>
                        <Link class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover see-all">Xem tất cả
                        </Link>
                    </div>

                    <div class="row activity-row">
                        {activities.map(activity => (
                            <div class="col-xxl-3 shadow-sm activity-cell">
                                <div class="activity-cell-title">
                                    <div class="activity-name">{activity.name}</div>
                                    <div class="current-quantity">{activity.currentQuantity}/{activity.quantity}</div>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={star} alt="Star icon" />
                                    <p> {activity.value} ngày CTXH </p>
                                </div>
                                
                                <div>
                                    <img class="activity-detail-icon" src={location} alt="Location icon" />
                                    <p> {activity.place} </p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={time} alt="Clock icon" />
                                    <p> {activity.time}</p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={profile} alt="Profile icon" />
                                    <p> {activity.quantity} Sinh viên </p>
                                </div>

                                <button class="btn btn-primary btn-sm detail-button">Chi tiết</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
    );
}

export default ActivityAdminListPage;
