import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import RegisterActivityConfirmationPopup from '../components/RegisterConfirmation';
import ActivityContentTab from '../components/ActivityContentTab';
import StudentListTab from '../components/StudentListTab';
import ActivityForumTab from '../components/ActivityForumTab';
import AttendanceTab from '../components/AttendanceTab';

function ActivityDetailPage() {
    let { id } = useParams();

    const [role, setRole] = useState('sinh viên');

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmRegistration = () => {
        // Xử lý đăng ký hoạt động ở đây
        // Sau khi đăng ký, có thể cập nhật trạng thái hoặc thực hiện các hành động cần thiết
        setShowConfirmation(false);
        // Add your registration logic here
    };

    const renderButton = () => {
        if (role === 'sinh viên') {
            return (
                <div>
                    <button onClick={() => setShowConfirmation(true)}>Đăng ký</button>
                    {showConfirmation && <RegisterActivityConfirmationPopup onConfirm={handleConfirmRegistration} />}
                </div>
            );
        } else if (role === 'admin') {
            return <button>Chỉnh sửa</button>;
        }
        return null;
    };

    return (
        <div>
            <h1>Chi tiết hoạt động {id}</h1>
            {renderButton()}
            <TabComponent />
        </div>
    );
}

// Tab component
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
        <div>
            <button onClick={() => setCurrentTab('activityContent')}>Nội dung hoạt động</button>
            <button onClick={() => setCurrentTab('studentList')}>Danh sách sinh viên</button>
            <button onClick={() => setCurrentTab('activityForum')}>Thông báo hoạt động</button>
            <button onClick={() => setCurrentTab('attendance')}>Điểm danh</button>
            {renderTabContent(currentTab)}
        </div>
    );
};

export default ActivityDetailPage;
