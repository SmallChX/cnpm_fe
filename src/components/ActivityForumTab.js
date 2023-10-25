import React, { useState } from 'react' 

function ActivityForumTab() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John', title: 'Hello', content: 'Hi there!' },
        { id: 2, sender: 'Alice', title: 'Greetings', content: 'Nice to meet you!' },
        // ...Thêm các tin nhắn khác tại đây
    ]);

    const [newMessage, setNewMessage] = useState({
        sender: '',
        title: '',
        content: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMessage((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddMessage = () => {
        setMessages((prevMessages) => [...prevMessages, { ...newMessage, id: Date.now() }]);
        setNewMessage({ sender: '', title: '', content: '' });
    };

    return (
        <div>
            <h2>Forum</h2>
            {messages.map((message) => (
                <div key={message.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <p><b>Sender:</b> {message.sender}</p>
                    <p><b>Title:</b> {message.title}</p>
                    <p><b>Content:</b> {message.content}</p>
                </div>
            ))}
            <h3>Add New Message</h3>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newMessage.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Content"
                    name="content"
                    value={newMessage.content}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddMessage}>Add Message</button>
            </div>
        </div>
    );
}

export default ActivityForumTab;