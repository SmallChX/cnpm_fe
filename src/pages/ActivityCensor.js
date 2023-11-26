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

function ActivityCensor() {
    const activities = [
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

            <div class="row statistics-bar" id="decentralise-title-container-1">
                <div class="col decentralise-title">
                    Hoạt động chờ duyệt
                </div>

                <div class="col search-bar-decentralise-container">
                    <input type="search" placeholder="Search" class="search-bar search-bar-decentralise"/>
                </div>
            </div>  

            <div class="row activity-row see-all-cell-container">
                    {activities.map(activity => (
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

                            <Link to={`/activity/${activity.id}`} class="btn btn-primary btn-sm detail-button">Chi tiết</Link>
                        </div>
                        
                    ))}
                </div>                     

        </div>        
    )

}

export default ActivityCensor;