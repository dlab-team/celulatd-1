import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";

function NavbarVideoRead() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink to="/ComponetVideo" className="Link" activeClassName="active">
              <Nav.Link href="/ComponetVideo">
                <h2>VIDEOS</h2>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/ListDocument" className="Link" activeClassName="active">
              <Nav.Link href="/ListDocument">
                <h2>DOCUMENTOS</h2>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarVideoRead;
