const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(cors({ origin: "*" }));
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    console.log("development");
    res.json("development");
  });
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("/", (req, res) => {
    console.log("/");
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.post("/join-online", (req, res) => {
  console.log(req.body);
  res.json(process.env.NODE_ENV);
});

server.listen(3001, () => {
  console.log("listening port 3001");
});

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg, room) => {
    console.log(msg, room);
    console.log("socket id: ", socket.id);
    if (room !== "") {
      if (io.sockets.adapter.rooms.get(room).has(socket.id)) {
        console.log("broadcasting to room");
        socket.to(room).emit("send_message", msg);
      } else {
        socket.emit("error", "you are not in this room");
      }
    } else {
      //socket.broadcast.emit("send_message", msg);
    }
  });

  socket.on("join", (msg, room, user) => {
    console.log("joining...");
    console.log("join", msg, room, user);
    console.log("trying to join");
    socket.username = user;
    console.log("socket username is: ", user);
    let rooms = io.sockets.adapter.rooms;
    let roomsize = rooms.get(room);
    console.log("rooms: ", rooms, "roomsize: ", roomsize);

    if (roomsize === undefined) {
      console.log("welcome first");
      socket.join(room);
      socket.emit("success", "joined the room succesfully (1)", 1);
    }
    if (roomsize !== undefined) {
      console.log(roomsize.size);
      if (roomsize.size > 1) {
        console.log("room is full");
        socket.emit("error", "this room is already full");
      } else {
        if (io.sockets.adapter.rooms.get(room).has(socket.id)) {
          socket.emit("error", "you are already in this room.");
        } else {
          console.log("welcome second");
          socket.join(room);
          socket.emit("success", "joined the room succesfully (2)", 2);
          socket.emit("readyToStartGame", room);
          socket.to(room).emit("readyToStartGame", room);
        }
      }
    }
  });

  socket.on("startGameMessage", (user, room) => {
    try {
      console.log(user, room);
      let roomName = room;
      if (user == null || room == null) {
        return;
      } else if (io.sockets.adapter.rooms.get(roomName).has(socket.id)) {
        socket.to(roomName).emit("startGameMessage", user);
      }
    } catch (error) {
      console.log("error happened, disconnecting socket");
      socket.disconnect();
    }
  });

  socket.on("gameMessage", (data) => {
    console.log("got game updata from socketid: ", socket.id);
    let roomName = data.roomName;
    if (io.sockets.adapter.rooms.get(roomName).has(socket.id)) {
      socket.to(roomName).emit("gameUpdate", data);
    }
  });

  socket.on("greet", () => {
    console.log("greetings");
  });
});
