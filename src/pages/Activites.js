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
    const [dataget, setDataget] = useState([]);
    const [curItems, setCurItems] = useState(3);
    const [curExpand, setCurExpand] = useState(false);
    const [upItems, setUpItems] = useState(3);
    const [upExpand, setUpExpand] = useState(false);

    useEffect(() => {
        fetch('/act.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setDataget(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [showConfirmation, setShowConfirmation] = useState(false); // Thêm trạng thái để kiểm soát việc hiển thị cửa sổ xác nhận

    const handleDelete = () => {
        setShowConfirmation(false); // Hiển thị cửa sổ xác nhận khi nhấn nút "Delete"
    };

    const showMoreCurrent = () => {
        setCurItems((prevValue) => prevValue + dataget.length);
        setCurExpand(!curExpand);
    };

    const showLessCurrent = () => {
        setCurItems(3);
        setCurExpand(!curExpand);
    };

    const showMoreUpcoming = () => {
        setUpItems((prevValue) => prevValue + dataget.length);
        setUpExpand(!upExpand);
    };

    const showLessUpcoming = () => {
        setUpItems(3);
        setUpExpand(!upExpand);
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
                {curExpand ? (
                    <button
                        className="btn btn-sm btn-outline-dark ml-auto"
                        onClick={showLessCurrent}
                    >
                        Thu gọn
                    </button>
                ) : (
                    <button
                        className="btn btn-sm btn-outline-dark ml-auto"
                        onClick={showMoreCurrent}
                    >
                        Xem tất cả
                    </button>
                )}
            </div>

            <div className="row activity-row">
                {dataget.slice(0, curItems).map(activity => (
                    <div className="col-xxl-3 shadow-sm activity-cell" key={activity.id}>
                        <div className="activity-cell-title">
                            <div className="activity-name">{activity.basicInfo.name}</div>
                            <div className="current-quantity">{activity.basicInfo.currentMember}/{activity.basicInfo.member}</div>
                        </div>

                        <div>
                            <img className="activity-detail-icon" src={star} alt="Star icon" />
                            <p>{activity.basicInfo.privileges} ngày CTXH</p>
                        </div>

                        <div>
                            <img className="activity-detail-icon" src={location} alt="Location icon" />
                            <p>{activity.basicInfo.location}</p>
                        </div>

                        <div>
                            <img className="activity-detail-icon" src={time} alt="Clock icon" />
                            <p>{activity.basicInfo.time}</p>
                        </div>

                        <div>
                            <img className="activity-detail-icon" src={profile} alt="Profile icon" />
                            <p>{activity.basicInfo.member} Sinh viên</p>
                        </div>

                        <Link to={`/activity/${parseInt(activity.id)}`} className="btn btn-primary btn-sm detail-button">
                            Tham gia
                        </Link>
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


            <div class="row activity-state-title">
                <div>Sắp diễn ra</div>
                {upExpand ? (
                    <button
                        className="btn btn-sm btn-outline-dark ml-auto"
                        onClick={showLessUpcoming}
                    >
                        Thu gọn
                    </button>
                ) : (
                    <button
                        className="btn btn-sm btn-outline-dark ml-auto"
                        onClick={showMoreUpcoming}
                    >
                        Xem tất cả
                    </button>
                )}
            </div>

            <div class="row activity-row">
                {dataget.slice(0, upItems).map(activity => (
                    <div class="col-xxl-3 shadow-sm activity-cell" key={activity.id}>
                        <div class="activity-cell-title">
                            <div class="activity-name">{activity.basicInfo.name}</div>
                            <div class="current-quantity">{activity.basicInfo.currentMember}/{activity.basicInfo.member}</div>
                        </div>

                        <div>
                            <img class="activity-detail-icon" src={star} alt="Star icon" />
                            <p> {activity.basicInfo.privileges} ngày CTXH </p>
                        </div>

                        <div>
                            <img class="activity-detail-icon" src={location} alt="Location icon" />
                            <p> {activity.basicInfo.location} </p>
                        </div>

                        <div>
                            <img class="activity-detail-icon" src={time} alt="Clock icon" />
                            <p> {activity.basicInfo.time}</p>
                        </div>

                        <div>
                            <img class="activity-detail-icon" src={profile} alt="Profile icon" />
                            <p> {activity.basicInfo.member} Sinh viên </p>
                        </div>

                        <button class="btn btn-primary btn-sm detail-button">Chi tiết</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityListPage;
