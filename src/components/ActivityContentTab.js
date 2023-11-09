import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import star from '../image/magic-star.png';


function ActivityContentTab() {
    let { id } = useParams();

    const [activityName, setActivityName] = useState('Hoạt động 1');
    const [activityValue, setActivityValue] = useState('Số ngày CTXH');
    const [activityTime, setActivityTime] = useState('9:00 AM 20/10/2023');
    const [activityPlace, setActivityPlace] = useState('BK.B6');
    const [activityDetail, setActivityDetail] = useState('Dọn dẹp vệ sinh phòng kho');

    return (
        <div class="row actcontent">
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
        </div>
        // <div>
        //     <h2 class="hehee">{activityName}</h2>
        //     <div>
        //         <b>- Quyền lợi: </b>
        //         {activityValue}
        //     </div>
        //     <div>
        //         <b>- Thời gian: </b>
        //         {activityTime}
        //     </div>
        //     <div>
        //         <b>- Địa điểm: </b>
        //         {activityPlace}
        //     </div>
        //     <div>
        //         <b>- Nội dung công việc: </b>
        //         {activityDetail}
        //     </div>
        //     <div>
        //         <b>- Yêu cầu: </b>Sinh viên nghiêm túc, có mặt đúng giờ
        //     </div>
        //     <div>
        //         <b>- Lưu ý: </b> Nếu sinh viên đăng ký không thể tham gia, phải tìm người thay thế. Nếu không sẽ vào danh sách đen của khoa.
        //     </div>
        // </div>
    );
}

export default ActivityContentTab;