import { Server } from "socket.io";
import { middleToken } from "../config/jwt.js";
import jwt from "jsonwebtoken";
import { userDetail, userSocket } from "../controllers/userController.js";

const connectedUsers = [];
const roomsConnected = [];

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const emitConnectedUsers = () => {
    io.emit("connected_users", connectedUsers);
  };

  const emitList_product = () => {
    io.emit("ListproducthaveAllComment", connectedUsers);
  };
  // const emitroomsConnected = (socket) => {
  //   roomsConnected.forEach((room) => {
  //     room.users.forEach((user) => {
  //       if (user.id === socket.userDetail.user_id) {
  //         io.to(user.socketId).emit("room_list_join", [room]);
  //       }
  //     });
  //   });
  // };

  io.use((socket, next) => {
    const token = socket.handshake.headers["token"];
    const req = { headers: { token } };
    const res = {
      status: (statusCode) => ({
        json: (message) => next(new Error(JSON.stringify(message))),
        send: (message) => next(new Error(message)),
      }),
    };
    try {
      middleToken(req, res, async (err) => {
        if (err) {
          return next(new Error("Authentication error"));
        }

        const dataToken = jwt.decode(token);

        try {
          console.log(
            `Lấy thông tin người dùng với ID: ${dataToken.data.user_id}`
          );
          const req = { id: dataToken.data.user_id };
          const user = await userSocket(req, res);
          socket.userDetail = user;

          // Kiểm tra xem user đã tồn tại trong danh sách connectedUsers chưa
          const userExists = connectedUsers.some(
            (connectedUser) => connectedUser.id === user.user_id
          );

          if (!userExists) {
            // Nếu chưa, thêm user vào danh sách
            connectedUsers.push({
              id: user.user_id,
              name: user.user_name,
              image: user.user_image,
              socketId: socket.id,
            });
            console.log(connectedUsers);

            // Phát danh sách các user đã kết nối tới tất cả các client
            emitConnectedUsers();
          }

          next();
        } catch (error) {
          console.error("Error in userDetail:", error);
          return next(new Error("Failed to fetch user details"));
        }
      });
    } catch (error) {
      console.error("Error in middleware:", error);
      next(error);
    }
  });

  io.on("connection", (socket) => {
    console.log(socket.userDetail.user_name + " Đã kết nối");

    emitConnectedUsers();
    // emitroomsConnected(socket);
    socket.on("authentic_user", (data) => {
      io.to(socket.id).emit("authentication", data);
    });

    socket.on("JoinRoomUser", (data) => {
      const user_one = {
        id: socket.userDetail.user_id,
        name: socket.userDetail.user_name,
        image: socket.userDetail.user_image,
        socketId: socket.id,
      };
      const user_two = data.user;
      const roomId =
        user_one.id < user_two.id
          ? `${user_one.id}_${user_two.id}`
          : `${user_two.id}_${user_one.id}}`;

      const roomIdExists = roomsConnected.some(
        (roomsConnected) => roomsConnected.id === roomId
      );

      if (!roomIdExists) {
        roomsConnected.push({ id: roomId, users: [user_one, user_two] });
      }

      console.log("Room", roomsConnected);
      socket.join(roomId);
      io.to(roomId).emit(
        "room_list_join",
        roomsConnected.filter((room) => room.id === roomId)
      ); // Chỉ phát sự kiện cho các thành viên trong phòng
    });

    socket.on("disconnect", () => {
      console.log("Người dùng " + socket.id + " đã ngắt kết nối");

      // Xóa user khỏi danh sách connectedUsers khi ngắt kết nối
      const index = connectedUsers.findIndex(
        (user) => user.socketId === socket.id
      );
      if (index !== -1) {
        connectedUsers.splice(index, 1);
        console.log(connectedUsers);

        // Phát danh sách cập nhật các user đã kết nối tới tất cả các client
        emitConnectedUsers();
      }
    });
  });

  return io;
};

export default setupSocket;
