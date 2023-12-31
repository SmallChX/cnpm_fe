import React, { useState } from 'react'
import '../../style/forum.css'
const Response = ({ username, responseTime, content }) => {
    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '10px', marginTop: '10px' }}>
          <div>
            <span style={{ fontWeight: 'bold' }}>{username}</span> ({responseTime}): {content}
          </div>
        </div>
      );
}
function ForumActivityTab() {
    const [responseInput, setResponseInput] = useState('');

    const threadResponse = [
        {username: "Minh Thuận", reponseTime: "19g15 27/10/2023", content:"Được bạn nhé!"}
    ]
    const thread = [
        {threadID: 1, username: "Minh Thuận", role: "host", title: "Thông báo", threadTime: "18g00 27/10/2023", content: "Các bạn ngày mai tập trung tại sảnh A3, trường Đại học Bách khoa cơ sở Lý Thường Kiệt trước 8g00 nhé. Trang phục lịch sự.", response: null},
        {threadID: 2, username: "Đỗ Tiến", role: "attendance", title: "Hỏi về trang phục", threadTime: "19g00 27/10/2023", content: "Cho mình hỏi nếu mình không chuẩn bị quần tây đen được thì có thể thay bằng quần tối mau không ạ?", response: threadResponse[0]},
        {threadID: 3, username: "Nhật Hà", role: "attendance", title: "Thắc mắc về nội dung công việc", threadTime: "19g02 27/10/2023", content: "Cho mình hỏi công việc có yêu cầu chuẩn bị Laptop, không biết mình có cần phản tải chương trình gì trước để tiện cho ngày mai không?", response: null},
    ]


    const handleResponseChange = (e) => {
        setResponseInput(e.target.value);
      };
    
      const handleResponseSubmit = (threadID) => {
        // Xử lý submit response ở đây
        console.log(`Thread ID ${threadID}, Response: ${responseInput}`);
      };

    return (
        <div class = "row actcontent thislayout">
          <button type="button" class="btn btn-light buttonresg">Tạo thảo luận</button>
          <div class="forumlayout">
            {thread.map((t) => (
              <div key={t.threadID} class="topic">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '10px' }}>
                    <img src={`avatar_${t.username}.png`} alt={`${t.username} avatar`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                  </div>
                  <div style={{ fontWeight: t.role === 'host' ? 'bold' : 'normal' }}>
                    {t.username} {t.role === 'host' && <span style={{ color: 'red' }}>🔔</span>}
                  </div>
                </div>
                <div style={{ marginTop: '5px', marginBottom: '10px', fontWeight: 'bold', color: t.role === 'host' ? 'red' : 'black' }}>{t.title}</div>
                <div>{t.content}</div>
                {t.role === 'attendance' ? (
                  t.response ? (
                      <Response username={t.response.username} responseTime={t.response.reponseTime} content={t.response.content}/>
                  ) : ( <div style={{ marginTop: '10px' }}>
                          <input type="text" value={responseInput} onChange={handleResponseChange} placeholder="Nhập câu trả lời..." />
                          <button btn onClick={() => handleResponseSubmit(t.threadID)}>Trả lời</button>
                      </div>)
                  ) : null}
              </div>
            ))}
          </div>
        </div>
  );
}

export default ForumActivityTab;