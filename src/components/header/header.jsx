import { Link } from "react-router-dom";

import { Magic_Logo } from "../../assets/img";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <Link to="/" className="header_logo">
          <img
            src={Magic_Logo}
            alt="Magic the gathering logo"
            className="header_logo_image"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_wrapper">
        <li className="navbar_wrapper_elem">
          <Link to="/" className="navbar_wrapper_elem_link">
            Mainpage
          </Link>
        </li>
        <li className="navbar_wrapper_elem">
          <Link to="/search" className="navbar_wrapper_elem_link">
            Search
          </Link>
        </li>
        <li className="navbar_wrapper_elem">
          <Link to="/build" className="navbar_wrapper_elem_link">
            Deck Build
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
