import React, {useState} from 'react';
import { SearchBar } from '../components/SearchBar';
import UserHistoryTab from '../components/UserHistoryTab';
import { Link } from 'react-router-dom';
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

function UserHistoryPage() {
    const [results, setResults] = useState([]);

    return(
        <div>
            <div class ="container-md row">
                <div class="col-10 content-column">
                    <div class ="toprow row">
                        {/* navigation buttons */}
                        <div class ="col">
                            <button class="btn btn-primary arrow-button-container">
                                <img class="arrow-icon" src={leftArrow} />
                            </button>
                            <button  class="btn btn-primary arrow-button-container">
                                <img class="arrow-icon" src={rightArrow} />
                            </button>
                        </div>

                        {/* add cai nut notification */}
                        <button class="btn btn-secondary arrow-button-container account-icon-container">
                            <img class="bell-icon" src={bell} alt="bell-icon"/>
                        </button>

                        {/* cai tab ben phai */}
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
                    {/* <TabComponent /> */}
                    <SearchBar setResults={setResults}/>

                    <h2 class="history-title">Hoạt động của tôi</h2>
                    <UserHistoryTab />
                </div>
            </div>  
        </div>
    );
}

// const TabComponent = () => {
//     const [activeTab, setActiveTab] = useState('tab1');

//     const renderTabContent = (tab) => {
//         switch (tab)
//         {
//             case ''
//         }
//     };
// }

export default UserHistoryPage;