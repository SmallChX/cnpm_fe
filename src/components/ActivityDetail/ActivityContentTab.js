import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import star from '../../image/magic-star.png';
import '../../style/activitycontent.css'
import userperson from '../../image/profile-2user.png'
import location from '../../image/location.png'
import clock from '../../image/clock.png'
import person from '../../image/person.png'
import gearshop from '../../image/gearshape.png'
import { data } from '../PieChartActivity';


function ActivityContentTab() {
    let { id } = useParams();
    const [activityData, setActivityData] = useState({
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
                const selectedActivity = data.find((activity) => activity.id === id);
                if (selectedActivity) {
                    setActivityData(selectedActivity);
                } else {
                    console.error(`Activity with ID ${id} not found.`);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

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
                            <div class="subcontent-detail">{activityData.basicInfo.createdBy}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={star} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Quyền lợi</h3></div>
                            <div class="subcontent-detail">{activityData.basicInfo.privileges}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={location} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Địa điểm</h3></div>
                            <div class="subcontent-detail font-size-sm">{activityData.basicInfo.location}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={clock} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Thời gian diễn ra</h3></div>
                            <div class="subcontent-detail">{activityData.basicInfo.time}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={userperson} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Số lượng sinh viên</h3></div>
                            <div class="subcontent-detail">{activityData.basicInfo.member}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={gearshop} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Chế độ hoạt động</h3></div>
                            <div class="subcontent-detail">{activityData.basicInfo.operationMode}</div>
                        </div>
                    </div>

                    <div class="actdetail-subcontent ">
                        <div class="subcontain-image col-1">
                            <img class="subcontain-icon" src={person} />
                        </div>
                        <div class="subcontain-infor col-11">
                            <div class="subcontent-title"><h3>Đối tượng tham gia</h3></div>
                            <div class="subcontent-detail">{activityData.basicInfo.studentType}</div>
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
                        {activityData.criteria && activityData.criteria.length > 0 ? (
                            activityData.criteria.map((criterion, index) => (
                                <li key={index}>{criterion}</li>
                            ))
                        ) : (
                            <li>No criteria available</li>
                        )}
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