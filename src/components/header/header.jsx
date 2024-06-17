import magic_logo from "../../assets/img/magic_logo.png"

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={magic_logo} alt="Magic the gathering logo" className="header_logo_image"/>
      </div>
    </header>
  );
}

export default Header;