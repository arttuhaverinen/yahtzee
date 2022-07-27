import React from "react";
import { Link } from "react-router-dom";

const OnlineMenu = () => {
  return (
    <div className="container div-main-menu">
      <h1>Play Online</h1>
      <label htmlFor="">Username</label>
      <input type="text" />
      <label htmlFor="">Room name</label>
      <input type="text" />
      <Link to="/searching">Join room</Link>
      <Link to="/">Return to maine menu</Link>
    </div>
  );
};

export default OnlineMenu;
