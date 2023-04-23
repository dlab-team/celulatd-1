import React from "react";
import "../../scssWeb/main.css";
import LogoSvg from "../../assets/img/LogoVector.svg";
import FraseSvg from "../../assets/img/Frase1Vector.svg";

const Header = ({ userName }) => {
  const currentDate = new Date().toLocaleDateString();
  const avatar =
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
  return (
    <header className="header-container">
      <div className="header-container-logo">
        <img src={LogoSvg} className="header-logo" />
        <img src={FraseSvg} className="header-logo" />
      </div>
      <div className="user-container">
        <img src={avatar} alt="Profile" className="profile-pic" />
        <p className="welcome-message">Bienvenido,</p>
        <p className="user-name">{userName}</p>
      </div>
      {/* <div className="search-container">
        <input type="text" placeholder="Buscar" className="search-input" />
        <button className="search-button">Buscar</button>
      </div> */}
      <div className="settings-container">
        <div className="date-container">{currentDate}</div>
        <button className="alarm-button">Alarma</button>
        <button className="dark-mode-button">Modo oscuro</button>
      </div>
    </header>
  );
};

export default Header;
