import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io, { Socket } from "socket.io-client";

const OnlineMenu = ({ roomName, setRoomName, username, setUsername, socket, setSocket }) => {
  //const [username, setUsername] = useState();
  //const [roomName, setRoomName] = useState();

  const [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    if (socket !== null) {
      socket.on("readyToStartGame", () => {
        console.log("ready to start");
        setGameReady(true);
      });
    }
  }, [socket]);

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
      getSocket.emit("join", "im joining room", roomName, username);
    }
  };

  const greetings = () => {
    const getSocket = io.connect("http://localhost:3001/");
    setSocket(getSocket);
    getSocket.emit("join", "im joining room", roomName);
  };

  const handleGameReadyButton = () => {
    if (gameReady && socket) return <Link to="/mp-game">Start game</Link>;
    else if (socket) return <h1>Waiting for opponent...</h1>;
    else return <h1 className="h1-hidden">Waiting for opponent</h1>;
  };

  return (
    <div className="container div-main-menu">
      <div className="div-join-online-form">
        <label htmlFor="">
          <h3>Username:</h3>
        </label>
        <input onChange={(e) => handleUsername(e)} type="text" />
        <label htmlFor="">
          {" "}
          <h3>Room name:</h3>
        </label>
        <input onChange={(e) => handleRoomName(e)} type="text" />
        <Link onClick={(e) => handleJoinOnline(e, roomName, username, socket)} to="/searching-menu">
          Join room
        </Link>
        <Link className="" to="/">
          Return to main menu
        </Link>
        {handleGameReadyButton()}
      </div>

      {console.log("join1", roomName, username)}
    </div>
  );
};

export default OnlineMenu;
