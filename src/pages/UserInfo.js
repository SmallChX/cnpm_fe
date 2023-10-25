import React, { useState } from 'react'

function UserInfo() {
    const [userName, setUsername] = useState("Trần Minh Thuận");
    const [userID, setUserID] = useState("2114939");
    const [userMail, setUserMail] = useState("minhthuan55588@gmail.com");

    return (
        <div>
            <label>Tên người dùng:</label>
            <div>Tên người dùng: {userName}</div>
            <label>Mã số sinh viên</label>
            <div>{userID}</div>
            <label>Mail:</label>
            <div>{userMail}</div>
        </div>
    )
}

export default UserInfo;