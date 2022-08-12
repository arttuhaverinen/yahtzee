import React, { useState } from "react";
import { Link } from "react-router-dom";
import io, { Socket } from "socket.io-client";

const OnlineMenu = ({ roomName, setRoomName, username, setUsername, socket, setSocket }) => {
  //const [username, setUsername] = useState();
  //const [roomName, setRoomName] = useState();

  const handleRoomName = (e) => {
    e.preventDefault();
    setRoomName(e.target.value);
  };

  const handleUsername = (e) => {
    e.preventDefault();
    console.log("join", e.target.value);
    setUsername(e.target.value);
  };

  const handleJoinOnline = (e, roomName, username, socket) => {
    e.preventDefault();
    console.log("join", roomName, username);

    if (socket == null) {
      const getSocket = io.connect("http://localhost:3001/");
      setSocket(getSocket);
      getSocket.emit("join", "im joining room", roomName);
    }
  };

  const greetings = () => {
    const getSocket = io.connect("http://localhost:3001/");
    setSocket(getSocket);
    getSocket.emit("join", "im joining room", roomName);
  };

  return (
    <div className="container div-main-menu">
      <h1>Play Online</h1>
      <label htmlFor="">Username</label>
      <input onChange={(e) => handleUsername(e)} type="text" />
      <label htmlFor="">Room name</label>
      <input onChange={(e) => handleRoomName(e)} type="text" />
      <Link onClick={(e) => handleJoinOnline(e, roomName, username, socket)} to="/searching-menu">
        Join room
      </Link>
      <Link to="/mp-game">Start game</Link>

      <Link to="/">Return to main menu</Link>
      {console.log("join1", roomName, username)}
      <button onClick={() => greetings()}>greet</button>
    </div>
  );
};

export default OnlineMenu;
