import React from "react";
import { Link } from "react-router-dom";

const SearchingMenu = () => {
  return (
    <div className="container div-main-menu">
      <h1>Searching opponent...</h1>
      <Link to="/">Return to main menu</Link>
    </div>
  );
};

export default SearchingMenu;
