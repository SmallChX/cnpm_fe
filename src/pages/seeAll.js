import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../bootstrap.min.css';
import '../style/style.css';
import '../style/systemPage.css';
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

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import ConfirmationWindow from '../components/ConfirmationWindow';

function SeeAllPage() {
    let {mode} = useParams();

    // const [mode, setMode] = useState('upcoming');

    const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    const handleDelete = () => {
        setShowConfirmation(true); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    };

    const currentActivities = [
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' }
        // Thêm các hoạt động khác vào đây
    ];

    const upcomingActivities = [
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' },
        { id: 1, name: 'Trực phát thiết bị đồ án đa ngành', value: '1', time: '08/10/2023', place: 'Trường Đại học Bách khoa CS1', quantity:'2', currentQuantity: '0' }
        // Thêm các hoạt động khác vào đây
    ];

    const seeMode = () => {
        // See-all of current events
        if (mode === 'current') {
            return (
                <div class="row statistics-bar" id="decentralise-title-container-1">
                    <div class="col decentralise-title">
                        Hoạt động đang diễn ra
                    </div>

                    <div class="col search-bar-decentralise-container">
                        <input type="search" placeholder="Search" class="search-bar search-bar-decentralise"/>
                    </div>
                </div>
            );
        }
        // See-all of up-coming events
        else if (mode === 'upcoming') {
            return (
            <div class="row statistics-bar" id="decentralise-title-container-1">
                <div class="col decentralise-title">
                    Hoạt động sắp diễn ra
                </div>

                <div class="col search-bar-decentralise-container">
                    <input type="search" placeholder="Search" class="search-bar search-bar-decentralise"/>
                </div>
            </div>
            );
        }
        else return null;
    };

    const eventsTable = () => {
        if (mode === 'current') {
            return (
                <div class="row activity-row see-all-cell-container">
                    {currentActivities.map(activity => (
                        <div class="col-xxl-3 shadow-sm activity-cell see-all-cell">
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

                            <Link to={`/activity/${activity.id}`} class="btn btn-primary btn-sm detail-button">Tham gia</Link>
                        </div>
                        
                    ))}
                </div>
            );
        }
        else if (mode === 'upcoming') {
            return (
                <div class="row activity-row see-all-cell-container">
                    {upcomingActivities.map(activity => (
                        <div class="col-xxl-3 shadow-sm activity-cell see-all-cell">
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
        
                            <Link to={`/activity/${activity.id}`} onClick={() => setShowConfirmation(true)} class="btn btn-primary btn-sm detail-button">Chi tiết</Link>
                        </div>
                    ))} 
                </div>
            );
        }
        else return null;
    };

    return (
        <div class="statistics-body activity-statistics">
            <div class ="row">
                <div class ="col">
                    <Link to="/trend-statistics">
                        <button class="btn btn-primary arrow-button-container">
                            <img class="arrow-icon" src={leftArrow} />
                        </button>
                    </Link>
                    <button  class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={rightArrow} />
                    </button>
                </div>

                {/* <div class="col-3 notification-container"> */}
                <button class="btn btn-secondary arrow-button-container account-icon-container">
                    <img class="bell-icon" src={bell} alt="bell-icon"/>
                </button>

                    <Dropdown as={ButtonGroup} variant="user-account account-icon-container">
                        <Button variant="user-account account-icon-container">
                        <div class="user-account account-icon-container">
                            <img class="user-icon" src={user} />

                            <div class="user-infor">
                                <div class="user-name">Cinamon</div>
                                <div class="user-role">Sinh viên</div>
                            </div>
                        </div>
                        </Button>

                        <Dropdown.Toggle split variant="user-account account-icon-container" id="drop-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Cài đặt tài khoản</Dropdown.Item>
                            <Dropdown.Item href="#">Chỉnh sửa thông tin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </div>

            {seeMode()}
            {showConfirmation && (
                <ConfirmationWindow
                    onConfirm={() => {
                        // Xử lý khi người dùng xác nhận xóa
                        setShowConfirmation(false); // Ẩn cửa sổ xác nhận
                    }}
                    onDeny={() => setShowConfirmation(false)} // Xử lý khi người dùng từ chối
                    />
            )}            
            {eventsTable()}

        </div>
    )
}

export default SeeAllPage;