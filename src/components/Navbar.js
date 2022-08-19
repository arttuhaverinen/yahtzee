import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <h1>
        <Link to="/">Yahtzee</Link>
      </h1>
      {/*<ul>
        <li>
          <Link to="/">Yahtzee</Link>
        </li>
        <li>
          <a href="#news">d</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>*/}
    </div>
  );
};

export default NavBar;
