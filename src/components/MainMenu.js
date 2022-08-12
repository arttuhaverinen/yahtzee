import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainMenu = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed", location.pathname);
    return () => {
      console.log("unhook");
    };
  }, [location]);

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
