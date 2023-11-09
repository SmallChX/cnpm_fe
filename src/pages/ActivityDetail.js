import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../style/act_detail.css'
import '../style/style.css'
import '../bootstrap.min.css'
import RegisterActivityConfirmationPopup from '../components/RegisterConfirmation';
import ActivityContentTab from '../components/ActivityContentTab';
import StudentListTab from '../components/StudentListTab';
import ActivityForumTab from '../components/ActivityForumTab';
import AttendanceTab from '../components/AttendanceTab';
import star from '../image/magic-star.png';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';

function ActivityDetailPage() {
    let { id } = useParams();

    const [role, setRole] = useState('sinhvien');

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmRegistration = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };

    const renderButton = () => {
        if (role === 'sinhvien') {
            return (          
                <div>
                    <div class="container-md row">  
                        
                        <div class="col-10 content-column">
                            <div class ="toprow row">
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
                            </div>
                            <div class="row acttitle">
                                <div class="r2c1 col">
                                    <h1>Tên hoạt động ở đây nè!!!</h1>
                                </div>
                                <div class="r2c2">
                                    <div class="actnumber">4/8</div>
                                    <button type="button" class="actresig btn" onClick={() => setShowConfirmation(true)}>Đăng ký</button>
                                    {showConfirmation && <RegisterActivityConfirmationPopup onConfirm={handleConfirmRegistration} />}
                                </div>
                            </div>
                            <TabComponent />
                            {/* <div class="row actbutton">
                                <TabComponent />
                            </div> */}
                            {/* <div class="row actcontent">
                                <div class="col-6">
                                    <div class="contentleft ">
                                        <div class="actdetail-title">Thông tin cơ bản </div>
                                        
                                        <div class="actdetail-subcontent ">
                                            <div class="subcontain-image col-1">
                                                <img class="subcontain-icon" src={star} />
                                            </div>
                                            <div class="subcontain-infor col-11">
                                                <div class="subcontent-title"><h3>Cinamon</h3></div>
                                                <div class="subcontent-detail">Admin</div>
                                            </div>
                                        </div>
                            
                                    </div>
                                </div>

                                <div class ="col-6">
                                    <div class="contentright">
                                        <div class="actdetail-title">Mô tả hoạt động </div>
                                    </div>
                                    <div class="contentright">
                                        <div class="actdetail-title">Tiêu chí hợp lệ </div>
                                    </div>
                                    <div class="contentright">
                                        <div class="actdetail-title">Thông tin liên hệ</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div> 
                    {/* <button onClick={() => setShowConfirmation(true)}>Đăng ký</button>
                    {showConfirmation && <RegisterActivityConfirmationPopup onConfirm={handleConfirmRegistration} />} */}
                </div>
            );
        } else if (role === 'admin') {
            return <button>Chỉnh sửa</button>;
        }
        return null;
    };

    return (
        <div>
            {/* <h1>Chi tiết hoạt động {id}</h1> */}
            {renderButton()}
            {/* <TabComponent /> */}
        </div>
    );
}

// Tab component
const TabComponent = () => {
    const [currentTab, setCurrentTab] = useState('studentList');

    const renderTabContent = (tab) => {
        switch (tab) {
            case 'activityContent':
                return <ActivityContentTab />;
            case 'studentList':
                return <StudentListTab />;
            case 'activityForum':
                return <ActivityForumTab />;
            case 'attendance':
                return <AttendanceTab />;
            default:
                return null;
        }
    };

    return (
        <div class="actlayout">
            <div class="row actbutton">
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('activityContent')}>Nội dung hoạt động</button>
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('studentList')}>Danh sách sinh viên</button>
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('activityForum')}>Thông báo hoạt động</button>
                <button  type="button" class="detailbutton btn btn-outline-primary" onClick={() => setCurrentTab('attendance')}>Điểm danh</button>
            </div>
            
            {renderTabContent(currentTab)}
            
            
        </div>
    );
};

export default ActivityDetailPage;
