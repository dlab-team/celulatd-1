import React from 'react';



const Header = ({ userName }) => {
  const currentDate = new Date().toLocaleDateString();
 const avatar = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
  return (
    <header className="header-container">
      <div className="logo-container">
        <p>aqui va el logo</p>
      </div>
      <div className="user-container">
        <img src={avatar} alt="Profile" className="profile-pic"style={{ width: "50px", height: "50px" }}  />
        <div className="user-info">
          <p className="welcome-message">Bienvenido,</p>
          <p className="user-name">{userName}</p>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Buscar" className="search-input" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="settings-container">
        <div className="date-container">{currentDate}</div>
        <button className="alarm-button">Alarma</button>
        <button className="dark-mode-button">Modo oscuro</button>
      </div>
    </header>
  );
};

export default Header;
