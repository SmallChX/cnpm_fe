import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import star from '../image/magic-star.png';
import '../style/activitycontent.css'
import userperson from '../image/profile-2user.png'
import location from '../image/location.png'
import clock from '../image/clock.png'
import person from '../image/person.png'
import gearshop from '../image/gearshape.png'
import { data } from './PieChartActivity';


function ActivityContentTab() {
    let { id } = useParams();
    const [activityData, setActivityData] = useState({
        basicInfo: {},
        description: '',
        criteria: [],
        contactInfo: {}
    });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/act.json', {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json',
    //                 },
    //             });
    //             const res = await response.json();
    //             console.log('Data:', res);
    //             setActivityData(res);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    //     console.log('activityData:', activityData);
    // }, []);

    useEffect(() => {
        fetch('/act.json')
            .then((response) => response.json())
            .then((data) => setActivityData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const {
        basicInfo,
        description,
        criteria,
        contactInfo
    } = activityData || {};
    // console.log('basicInfo:', basicInfo);

    return (
        <div class="row actcontent">
            <div class="columcontent col-md-7 col-12">
                <div class="contentleft ">
                    <div class="actdetail-title">Thông tin cơ bản </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Tạo bởi</h3></div>
                            <div class="subcontent-detail">{data.basicInfo}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={star} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Quyền lợi</h3></div>
                            <div class="subcontent-detail">{basicInfo?.privileges}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={location} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Địa điểm</h3></div>
                            <div class="subcontent-detail font-size-sm">Trường Đại học Bách khoa, cơ sở Dĩ An</div>
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

            <div class ="columcontent col-md-5 col-12">
                <div class="contentright">
                    <div class="actdetail-title">Mô tả hoạt động </div>
                    <p>{activityData.description}</p>
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

    );
}

export default ActivityContentTab;