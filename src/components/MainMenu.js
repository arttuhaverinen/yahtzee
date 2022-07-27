import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="container div-main-menu">
      <h1>Yatzy</h1>
      <Link to="/game">Play locally</Link>
      <Link to="/online-menu">Play online</Link>

      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default MainMenu;
