import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../style/act_detail.css'
import '../style/style.css'
import '../bootstrap.min.css'
import ApproveActivePopUp from '../components/ActiviteManager/ApproveActive'
import DeleteActivePopup from '../components/ActiviteManager/DeleteActivePopUp';
import UpdateInforPopUp from '../components/ActiviteManager/UpdateInforPopUp';
import RegisterActivityConfirmationPopup from '../components/ActivityDetail/RegisterConfirmation';
import ActivityContentTab from '../components/ActivityDetail/ActivityContentTab';
import StudentListTab from '../components/ActivityDetail/StudentListTab';
import ActivityForumTab from '../components/ActivityDetail/ActivityForumTab';
import AttendanceTab from '../components/ActivityDetail/AttendanceTab';
import leftArrow from '../image/left-arrow.png';
import rightArrow from '../image/right-arrow.png';
import bell from '../image/Bell_fill.png';
import user from '../image/user.png';
import vector from '../image/vector.png';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


function ActivityDetailPage() {
    let { id } = useParams();

    const [activityData, setActivityData] = useState({
        id: '',
        basicInfo: {}
    });

    useEffect(() => {
        fetch('/act.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedActivity = data.find((activity) => activity.id === id);
                if (selectedActivity) {
                    setActivityData(selectedActivity);
                } else {
                    console.error(`Activity with ID ${id} not found.`);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    const [role, setRole] = useState('tovanphong');
    const [showApproveActive, setShowApproveActive] = useState(false);
    const [showDeleteActive, setShowDeleteActive] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showUpdateActive, setShowUpdateActive] = useState(false);

    const handleConfirmRegistration = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };
    const handleUpdateActive = () => {
        setShowUpdateActive(false);
    }

    const handleDeleteActive = () => {
        setShowDeleteActive(false);
    }


    const handleApproveActive = () => {
        setShowApproveActive(false);
    }
    const getUserRoleName = (role) => {
        switch (role) {
          case 'admin':
            return 'Admin';
          case 'sinhvien':
            return 'Sinh viên';
          case 'tovanphong':
            return 'Tổ văn phòng';
          default:
            return 'Khách';
        }
      };

    const renderButton = () => {        
        return(
            <>      
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
                        <Dropdown as={ButtonGroup} variant="user-account account-icon-container">
                            <Button variant="user-account account-icon-container">
                            <div class="user-account account-icon-container">
                                <img class="user-icon" src={user} />

                                <div class="user-infor">
                                    <div class="user-name">Cinamon</div>
                                    <div class="user-role">{getUserRoleName(role)}</div>
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
                    <div class="row acttitle">
                        <div class="r2c1  col-sm col-12">
                            <h1 class="font-size-sm">{activityData.basicInfo.name}</h1>
                        </div>
                        <div class="r2c2 ">
                            <div class="actnumber">{activityData.basicInfo.currentMember}/{activityData.basicInfo.member}</div>
                            <SelectButton />
                        </div>
                    </div>
                    <TabComponent />
            </>     
        );       
    };

    const TabComponent = () => {
        const [currentTab, setCurrentTab] = useState('activityContent');
    
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
                    <button  
                        type="button" 
                        // class="detailbutton btn btn-outline-primary" 
                        className={`detailbutton btn font-size-sm ${currentTab === 'activityContent' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('activityContent')}>Thông tin
                    </button>
                    <button  
                        type="button" 
                        className={`detailbutton btn font-size-sm ${currentTab === 'studentList' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('studentList')}>Danh sách
                    </button>
                    <button  
                        type="button" 
                        className={`detailbutton btn font-size-sm ${currentTab === 'activityForum' ? 'active' : ' btn-outline-primary'}`}
                        onClick={() => setCurrentTab('activityForum')}>Thông báo
                    </button>
                    {role==='admin' &&(
                    <button  
                        type="button" 
                        className={`detailbutton btn  ${currentTab === 'attendance' ? 'active' : 'btn-outline-primary'}`}
                        onClick={() => setCurrentTab('attendance')}>Điểm danh
                    </button>
                    )}
                </div>
                
                {renderTabContent(currentTab)}
                
                
            </div>
        );
    };

    const SelectButton = () => {
        if (role === 'sinhvien') {
            return(
                <>
                    <button type="button" class="actresig-sinhvien btn" onClick={() => setShowConfirmation(true)}>Tham gia</button>
                    {showConfirmation && <RegisterActivityConfirmationPopup onConfirm={handleConfirmRegistration} />}
                </>
            );
        }else if (role === 'admin') {
            return(
                <>
                    <button type="button" class="actresig-admin btn" onClick={() => setShowUpdateActive(true)}>Cập nhật</button>
                    {showUpdateActive && <UpdateInforPopUp onConfirm={handleUpdateActive} />}
                </>
            );
        }else{
            return (
                <>
                    <button type="button" class="actresig-admin btn" onClick={() => setShowApproveActive(true)}>Duyệt</button>
                    {showApproveActive && <ApproveActivePopUp onConfirm={ handleApproveActive} />}
                    <button type="button" class="actresig-tvp btn" onClick={() => setShowDeleteActive(true)}>Xóa</button>
                    {showDeleteActive && <DeleteActivePopup onConfirm={ handleDeleteActive}/>}
                </>
            );
        } 

       
    }

    return (
        <>
            {/* <h1>Chi tiết hoạt động {id}</h1> */}
            {renderButton()}
            {/* <TabComponent /> */}
        </>
    );
}

// Tab component


export default ActivityDetailPage;
