import React, { useState } from "react";
import logo from './image/logoBK.png';
import house from './image/house.png';
import person from './image/person.png';
import gear from './image/gearshape.png';
import clock from './image/clock.arrow.png';
import { Link } from "react-router-dom";


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav class="col-2 title-column nav">
            <div class="logo-line">
                <img class="logo-BK" src={logo} alt="logoBK" />
                <div class="web-name">HUHU</div>
            </div>

            {/* <ul className="{isMobile ? 'nav-links-mobile' : 'nav-links'}">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <button className="burger-menu" onClick={handleToggle}>
                {isMobile ? 'Close' : 'Menu'}
            </button> */}

            <div class="item-line">
                <img class="item-logo" src={house} alt="House-icon" />
                <Link to="/" class="item-title">Trang chủ</Link>
            </div>

            <div class="item-line">
                <img class="item-logo" src={person} alt="House-icon" />
                <Link to="/activities" class="item-title">Hoạt động</Link>
            </div>

            <div class="item-line">
                <img class="item-logo" src={gear} alt="House-icon" />
                <Link to="/system-page" class="item-title">Hệ thống</Link>
            </div>

            <div class="item-line">
                <img class="item-logo" src={clock} alt="House-icon" />
                <Link to="/user-history" class="item-title">Lịch sử</Link>
            </div>

            <footer class="item-line">
                <img class="item-logo" src={clock} />
                <Link class="item-title">
                    Đăng xuất
                </Link>
            </footer>
        </nav>
    )
}

export default Navbar;