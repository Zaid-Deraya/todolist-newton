import React from "react";
import logo from "../assets/images/todologo.png";

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Todo"></img>
      </nav>
    </header>
  );
}

export default Header;
