import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import "../style/style.css";
import "../style/systemPage.css";

import leftArrow from "../image/left-arrow.png";
import rightArrow from "../image/right-arrow.png";
import bell from "../image/Bell_fill.png";
import user from "../image/user.png";
import vector from "../image/vector.png";
import { PieChartAcitivity } from "../components/PieChartActivity";
import { LineChartActivity } from "../components/LineChartActivity";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function SystemPage() {
  return (
    <div class="statistics-body">
      <div class="row">
        <div class="col">
          <button class="btn btn-primary arrow-button-container">
            <img class="arrow-icon" src={leftArrow} />
          </button>
          <Link to="/account-decentralise">
            <button class="btn btn-primary arrow-button-container">
              <img class="arrow-icon" src={rightArrow} />
            </button>
          </Link>
        </div>

        {/* <div class="col-3 notification-container"> */}
        {/* <div>
          <button class="btn btn-secondary arrow-button-container account-icon-container">
            <img class="bell-icon" src={bell} alt="bell-icon" />
          </button>
        </div> */}

        {/* <div class="user-account account-icon-container">
          <img class="user-icon" src={user} />

          <div class="user-infor">
            <div class="user-name">Cinamon</div>
            <div class="user-role">Sinh viên</div>
          </div>

          <Dropdown>
            <Dropdown.Toggle
              split
              variant="user-account account-icon-container"
              id="drop-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/user-info">
                {" "}
                Thông tin tài khoản
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

      <div class="row statistics-bar">
        <div class="col-md-6">
          <PieChartAcitivity />
        </div>

        <div class="col-md-4 statistics-infor">
          <div class="statistics-title">
            <Link class="statistics-title-link" to="/activity-statistics">
              Hoạt động tháng 10
            </Link>
          </div>

          <div class="statistics-result">
            <p>10 hoạt động đã được tổ chức.</p>
            <p>Diễn ra tại 2 cơ sở.</p>
            <p>Thu hút 15 sinh viên tham gia.</p>
          </div>
        </div>
      </div>

      <div class="row statistics-bar">
        <div class="col-md-6">
          <LineChartActivity />
        </div>

        <div class="col-md-4 statistics-infor">
          <div class="statistics-title">
            <Link class="statistics-title-link" to href="/">
              Xu hướng của năm 2022
            </Link>
          </div>
          <div class="statistics-result">
            <p>10 hoạt động đã được tổ chức.</p>
            <p>Diễn ra tại 2 cơ sở.</p>
            <p>Thu hút 15 sinh viên tham gia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemPage;
