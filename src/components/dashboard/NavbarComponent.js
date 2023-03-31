import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CasaSvg from "../../assets/img/CasaSvg.svg";
import "../../scss/components/dashboard/Navbar/Navbar.scss";
import AjusteWt from "../../assets/img/AjusteWt.svg";
import SvgMensajeW from "../../assets/img/SvgMensajeW.svg";
import SvgSubirVidW from "../../assets/img/SvgSubirVidW.svg";
import MiniRecursos from "../../assets/img/MiniRecursos.svg";
import Metricassvg from "../../assets/img/Metricassvg.svg";

function NavbarComponent() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} id= "navbar-user" className="navbar-background">
          <div className="navbar-admin-all">
            {" "}
            <Link to="/Inicio" className="Link">
              <img src={CasaSvg} className="svg-navbar" />
              <Nav.Link href="/Inicio"></Nav.Link>
            </Link>
            <Link to="/Ajustes" className="Link">
              <img src={AjusteWt} className="svg-navbar" />
              <Nav.Link href="/Ajustes"></Nav.Link>
            </Link>
             <Link to="/Statistics" className="Link">
              <img src={Metricassvg} className="svg-navbar" />
              <Nav.Link href="/Statistics"></Nav.Link>
            </Link> 
            <Navbar.Brand href="#"></Navbar.Brand>
            <Link to="/VideoUploader" className="Link">
              <img src={SvgSubirVidW} className="svg-navbar" />
              <Nav.Link href="/VideoUploader"></Nav.Link>
            </Link>
            <Link to="/ComponetVideo" className="Link">
              <img src={MiniRecursos} className="svg-navbar" />
              <Nav.Link href="/ComponetVideo"></Nav.Link>
            </Link>
            <Link to="/Notification" className="Link">
              <img src={SvgMensajeW} className="svg-navbar" />
              <Nav.Link href="/Notification"></Nav.Link>
            </Link>
            
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
