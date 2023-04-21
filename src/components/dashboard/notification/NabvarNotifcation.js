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
                <p>MENSAJES</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Notification" className="Link" activeClassName="active">
              <Nav.Link href="/Notification">
                <p>SUBIR MENSAJES</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Trash" className="Link" activeClassName="active">
              <Nav.Link href="/Trash">
                <p>PAPELERA</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarNotification;
