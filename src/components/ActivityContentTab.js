import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import star from '../image/magic-star.png';
import '../style/activitycontent.css'
import userperson from '../image/profile-2user.png'
import location from '../image/location.png'
import clock from '../image/clock.png'
import person from '../image/person.png'
import gearshop from '../image/gearshape.png'


function ActivityContentTab() {
    let { id } = useParams();

    const [activityName, setActivityName] = useState('Hoạt động 1');
    const [activityValue, setActivityValue] = useState('Số ngày CTXH');
    const [activityTime, setActivityTime] = useState('9:00 AM 20/10/2023');
    const [activityPlace, setActivityPlace] = useState('BK.B6');
    const [activityDetail, setActivityDetail] = useState('Dọn dẹp vệ sinh phòng kho');

    return (
        <div class="row actcontent">
            <div class="columcontent col-7">
                <div class="contentleft ">
                    <div class="actdetail-title">Thông tin cơ bản </div>
                    
                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Tạo bởi</h3></div>
                            <div class="subcontent-detail">Admin</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={star} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Quyền lợi</h3></div>
                            <div class="subcontent-detail">0,5 ngày CTXH, 1 ĐRL</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={location} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Địa điểm</h3></div>
                            <div class="subcontent-detail">Trường Đại học Bách khoa, cơ sở Dĩ An</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={clock} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Thời gian diễn ra</h3></div>
                            <div class="subcontent-detail">10:00 - 28/10/2023 đến 12:00 - 28/10/2023</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={userperson} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Số lượng sinh viên</h3></div>
                            <div class="subcontent-detail">8</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={gearshop} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Chế độ hoạt động</h3></div>
                            <div class="subcontent-detail">Công khai</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Đối tượng tham gia</h3></div>
                            <div class="subcontent-detail">Toàn bộ sinh viên trường Đại học Bách khoa - ĐHQG-HCM</div>
                        </div>
                    </div>

                    
        
                </div>
            </div>

            <div class ="columcontent col-5">
                <div class="contentright">
                    <div class="actdetail-title">Mô tả hoạt động </div>
                    <p>Đây là một tả hoạt động không dài không ngắn nhưng mà rất iu</p>
                </div>
                <div class="contentright">
                    <div class="actdetail-title">Tiêu chí hợp lệ </div>
                    <ul>
                        <li>Là sinh viên nam</li>
                        <li>Có sức khỏe</li>
                        <li>Có phương tiện di chuyển</li>
                    </ul>
                </div>
                <div class="contentright">
                    <div class="actdetail-title">Thông tin liên hệ</div>
                    <p>
                    https://www.facebook.com/BKCSE.Multimedia <br></br>
                    +84 1234 5678 99 (Admin)<br>
                    </br>Văn phòng Đoàn khoa KH&KTMT, BK.B6-602
                    </p>
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