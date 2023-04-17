import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";


function NavbarNotification() {

  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink
              to="/ListNotifications"
              className="Link" activeClassName="active">
              <Nav.Link href="/ListNotifications">
                <h2>MENSAJES</h2>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Notification" className="Link" activeClassName="active">
              <Nav.Link href="/Notification">
                <h2>SUBIR MENSAJES</h2>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarNotification;
