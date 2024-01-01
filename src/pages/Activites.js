import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import ConfirmationWindow from '../components/ConfirmationWindow';
import NewActivity from '../pages/NewActivity';

function ActivityListPage() {
    const [dataget, setDataget] = useState({
        id: '',
        basicInfo: {},
        description: '',
        criteria: [],
        contactInfo: {}
    });

    useEffect(() => {
        fetch('/act.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setDataget(Object.keys(data));
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    const handleDelete = () => {
        setShowConfirmation(false); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    };

    return (
        <div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={leftArrow} />
                    </button>
                    <button class="btn btn-primary arrow-button-container">
                        <img class="arrow-icon" src={rightArrow} />
                    </button>
                </div>

                {/* <div class="col-3 notification-container"> */}
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

                {/* </div> */}


            </div>

            <div class="row justify-content-end rowbutdk">
                <div class="justify-content-end ">
                    <button class="btn btn-dark btn-sm create-activity-button" onClick={() => setShowConfirmation(true)}>Tạo hoạt động</button>
                    {showConfirmation && <NewActivity onConfirm={handleDelete} />}

                </div>
            </div>

            <div class="row activity-state-title">
                <div>Đang diễn ra</div>
                <Link class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover see-all">Xem tất cả
                </Link>
            </div>

            {/* {dataget.map((value, index) => ( */}
            <div className="row activity-row">
                {/* {Object.values(dataget).map((activity) => ( */}
                <div className="col-xxl-3 shadow-sm activity-cell" key={index}>
                    {/* {Object.values(dataget.basicInfo).map((value, index) => ( */}
                        {/* <div key={index}> */}
                            <div className="activity-cell-title">
                                <div className="activity-name">{value.name}</div>
                                <div className="current-quantity">{value.currentMember}/{value.member}</div>
                            </div>

                            <div>
                                <img className="activity-detail-icon" src={star} alt="Star icon" />
                                <p>{value.privileges} ngày CTXH</p>
                            </div>

                            <div>
                                <img className="activity-detail-icon" src={location} alt="Location icon" />
                                <p>{value.location}</p>
                            </div>

                            <div>
                                <img className="activity-detail-icon" src={time} alt="Clock icon" />
                                <p>{value.time}</p>
                            </div>

                            <div>
                                <img className="activity-detail-icon" src={profile} alt="Profile icon" />
                                <p>{value.quantity} Sinh viên</p>
                            </div>

                            <Link to={`/activity/${parseInt(dataget.id)}`} className="btn btn-primary btn-sm detail-button">
                                Tham gia
                            </Link>
                        {/* </div> */}
                    {/* ))} */}
                </div>
                {/* ))} */}
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
            {/* ))} */}


            <div class="row activity-state-title">
                <div>Sắp diễn ra</div>
                <Link class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover see-all">Xem tất cả
                </Link>
            </div>

            <div class="row activity-row">
                {dataget.basicInfo && dataget.basicInfo.length > 0 ? (
                    
                        Object.values(dataget.basicInfo).slice(0, 3).map((activity, index) => (
                            <div class="col-xxl-3 shadow-sm activity-cell" key={index}>
                                <div class="activity-cell-title">
                                    <div class="activity-name">{activity.name}</div>
                                    <div class="current-quantity">{activity.currentMember}/{activity.member}</div>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={star} alt="Star icon" />
                                    <p> {activity.privileges} ngày CTXH </p>
                                </div>

                                <div>
                                    <img class="activity-detail-icon" src={location} alt="Location icon" />
                                    <p> {activity.location} </p>
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
                        ))
                    
                ) : (
                    <div>N/A</div>
                )}
            </div>
        </div>
    );
}

export default ActivityListPage;
