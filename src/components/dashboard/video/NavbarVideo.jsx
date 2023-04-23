import {  NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";

function NavbarVideo() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink to="/VideoUploader" className="Link" activeClassName="active">
              <Nav.Link href="/VideoUploader">
                <p>VIDEOS</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/DocumentUploader" className="Link" activeClassName="active">
              <Nav.Link href="/DocumentUploader">
                <p>DOCUMENTOS</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarVideo;
