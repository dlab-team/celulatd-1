import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";

function NavbarVideoRead() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink to="/ListVideo" className="Link" activeClassName="active">
              <Nav.Link href="/ListVideo">
                <p>VIDEOS</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/ListDocument" className="Link" activeClassName="active">
              <Nav.Link href="/ListDocument">
                <p>DOCUMENTOS</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarVideoRead;
