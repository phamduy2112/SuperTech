import express from "express";

// Tạo router Express
const socketRouters = express.Router();

// Định nghĩa route HTTP (không phải WebSocket) cho API thông thường
socketRouters.get("/chat123", (req, res) => {
  res.send("Chat API - WebSocket connection is handled separately.");
});

// Hàm để khởi tạo các sự kiện WebSocket
const initSocketEvents = (io) => {
  // Lắng nghe khi một client kết nối qua WebSocket
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Lắng nghe sự kiện 'message' từ client
    socket.on("message", (msg) => {
      console.log(`Message from ${socket.id}:`, msg);
      // Có thể phát lại cho tất cả các client
      io.emit("message", msg);
    });

    // Lắng nghe khi client ngắt kết nối
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

// Trả về router Express với WebSocket được khởi tạo
export default (io) => {
  initSocketEvents(io); // Khởi tạo các sự kiện WebSocket
  return socketRouters; // Trả về router HTTP
};
