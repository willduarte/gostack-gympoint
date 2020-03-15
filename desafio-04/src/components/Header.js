import React from "react";

import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <img src={logo} alt="Facebook" className="header-logo" />
          <ul>
            <li>
              <a href="#">
                <span>Meu perfil</span>
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
