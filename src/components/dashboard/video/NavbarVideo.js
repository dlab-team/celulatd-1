import { Link, NavLink } from "react-router-dom";
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
                <h2>VIDEOS</h2>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Inicio" className="Link" activeClassName="active">
              <Nav.Link href="/Inicio">
                <h2>DOCUMENTOS</h2>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarVideo;
