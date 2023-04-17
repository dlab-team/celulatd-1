import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../scssWeb/main.css";

function NavbarVideoRead() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <Link to="/ComponetVideo" className="Link">
              <Nav.Link href="/ComponetVideo">
                <h2>VIDEOS</h2>
              </Nav.Link>
            </Link>
          </div>
          <div>
            <Link to="/Inicio" className="Link">
              <Nav.Link href="/Inicio">
                <h2>DOCUMENTOS</h2>
              </Nav.Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarVideoRead;
