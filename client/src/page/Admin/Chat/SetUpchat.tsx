import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Địa chỉ server WebSocket của bạn

function SetUpchat() {
    const [serverMessage, setServerMessage] = useState(null);
    const [inputMessage, setInputMessage] = useState("");

    // Lắng nghe khi kết nối thành công với server
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server with socket ID: ", socket.id);
        });

        // Lắng nghe sự kiện 'some-event' từ server
        socket.on("some-event", (data) => {
            console.log("Received message from server: ", data);
            setServerMessage(data.response); // Cập nhật message từ server vào state
        });

        // Cleanup khi component bị unmount
        return () => {
            socket.off("connect");
            socket.off("some-event");
        };
    }, []);

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            // Gửi một sự kiện đến server với thông điệp người dùng nhập vào
            socket.emit("my-event", { message: inputMessage });
            setInputMessage(""); // Clear input after sending
        }
    };

    return (
        <div className="App">
            <h1>Socket.io Client with React</h1>
            <div>
                <label htmlFor="message">Enter a message: </label>
                <input
                    id="message"
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send to Server</button>
            </div>
            <p>Message from server: {serverMessage}</p>
        </div>
    );
}

export default SetUpchat


