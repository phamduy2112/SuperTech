import { Server } from "socket.io";

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Người dùng đã kết nối " + socket.id);

    socket.on("authentic_user", (data) => {
      console.log(data);
      io.to(socket.id).emit("authentication",data);
    });

    socket.on("disconnect", () => {
      console.log("Người dùng " + socket.id + " đã ngắt kết nối");
    });
  });
};

export default setupSocket;
