import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../style/style.css";
import "../style/systemPage.css";

import PrintConfirmationPopup from "../components/PrintConfirmationPopup";
import StudentAccountListTab from "../components/StudentAccountListTab";
import HolderAccountListTab from "../components/HolderAccountListTab";
import leftArrow from "../image/left-arrow.png";
import rightArrow from "../image/right-arrow.png";
import bell from "../image/Bell_fill.png";
import user from "../image/user.png";
import vector from "../image/vector.png";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function AccountDecentralise() {
  return (
    <div class="statistics-body activity-statistics">
      <div class="row">
        <div class="col">
          <Link to="/trend-statistics">
            <button class="btn btn-primary arrow-button-container">
              <img class="arrow-icon" src={leftArrow} />
            </button>
          </Link>
          <button class="btn btn-primary arrow-button-container">
            <img class="arrow-icon" src={rightArrow} />
          </button>
        </div>

        {/* <div class="col-3 notification-container"> */}
        {/* <button class="btn btn-secondary arrow-button-container account-icon-container">
          <img class="bell-icon" src={bell} alt="bell-icon" />
        </button> */}

        {/* <div class="user-account account-icon-container">
          <img class="user-icon" src={user} />

          <div class="user-infor">
            <div class="user-name">Cinamon</div>
            <div class="user-role">Sinh viên</div>
          </div>

          <button class="btn btn-secondary vector-container">
            <img class="vector-icon" src={vector} />
          </button>
        </div> */}
        <Dropdown>
          <Dropdown.Toggle
            as={Button}
            variant="user-account account-icon-container"
            style={{
              marginRight: "15px",
              borderRadius: "15px",
              backgroundColor: "transparent",
            }}
          >
            <img
              className="bell-icon"
              src={bell}
              alt="bell-icon"
              style={{ width: "20px", height: "auto" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "400px" }}>
            {" "}
            {/* Đặt chiều rộng tối đa cho cả menu */}
            <Dropdown.Item
              href="#/action-2"
              style={{ whiteSpace: "normal", wordWrap: "break-word" }}
            >
              [8/10/2022] Thông báo: Bạn đã bị chủ hoạt động Trần Minh Thuận
              loại khỏi "Trực phát thiết bị đồ án đa ngành" (Mã HĐ: 001).
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-1"
              style={{ whiteSpace: "normal", wordWrap: "break-word" }}
            >
              [7/10/2022] Thông báo: Bạn đã đăng ký thành công hoạt động "Trực
              phát thiết bị đồ án đa ngành" (Mã HĐ: 001, Host: Trần Minh Thuận).
            </Dropdown.Item>
            {/* Thêm các mục menu khác nếu cần */}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          as={ButtonGroup}
          variant="btn btn-secondary arrow-button-container account-icon-container"
        >
          <Button
            variant="user-account account-icon-container"
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            <div class="user-account account-icon-container">
              <img class="user-icon" src={user} />
              <div class="user-infor">
                <div class="user-name">Cinamon</div>
                <div class="user-role">Sinh viên</div>
              </div>
            </div>
          </Button>

          <Dropdown.Toggle
            split
            variant="user-account account-icon-container"
            id="drop-split-basic"
            style={{
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          />

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/user-info">
              Thông tin tài khoản
            </Dropdown.Item>
            {/* <Dropdown.Item href="#">Chỉnh sửa thông tin</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div class="row statistics-bar" id="decentralise-title-container-1">
        <div class="col decentralise-title">Phân quyền tài khoản</div>

        <div class="col search-bar-decentralise-container">
          <input
            type="search"
            placeholder="Search"
            class="search-bar search-bar-decentralise"
          />
        </div>
      </div>

      <TabComponent />
    </div>
  );
}

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState("studentList");

  const renderTabContent = (tab) => {
    switch (tab) {
      case "studentList":
        return <StudentAccountListTab />;
      case "holderList":
        return <HolderAccountListTab />;
      default:
        return null;
    }
  };

  return (
    <div class="actlayout decentralize-tab-button">
      <div class="row actbutton">
        <button
          type="button"
          class="detailbutton btn btn-outline-primary"
          onClick={() => setCurrentTab("studentList")}
        >
          Tài khoản SV
        </button>
        <button
          type="button"
          class="detailbutton btn btn-outline-primary"
          onClick={() => setCurrentTab("holderList")}
        >
          Tài khoản BTC
        </button>
      </div>

      {renderTabContent(currentTab)}
    </div>
  );
};

export default AccountDecentralise;
