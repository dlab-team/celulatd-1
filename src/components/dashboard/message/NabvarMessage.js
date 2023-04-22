import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";

function NavbarMessage() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink
              to="/ListMessages"
              className="Link"
              activeClassName="active">
              <Nav.Link href="/ListMessages">
                <p>MENSAJES</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Message" className="Link" activeClassName="active">
              <Nav.Link href="/Message">
                <p>SUBIR MENSAJES</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/TrashMessage"
              className="Link"
              activeClassName="active">
              <Nav.Link href="/TrashMessage">
                <p>PAPELERA</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMessage;
