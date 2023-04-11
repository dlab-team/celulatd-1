import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CasaSvg from "../../assets/img/CasaSvg.svg";
import "../../scssWeb/main.css";
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
            <Link to="/Inicio" >
              <img src={CasaSvg}/>
              <Nav.Link href="/Inicio"></Nav.Link>
            </Link>
            <Link to="/Ajustes" >
              <img src={AjusteWt}/>
              <Nav.Link href="/Ajustes"></Nav.Link>
            </Link>
             <Link to="/Statistics" >
              <img src={Metricassvg}/>
              <Nav.Link href="/Statistics"></Nav.Link>
            </Link> 
            <Link to="/VideoUploader" >
              <img src={SvgSubirVidW}/>
              <Nav.Link href="/VideoUploader"></Nav.Link>
            </Link>
            <Link to="/ComponetVideo">
              <img src={MiniRecursos}/>
              <Nav.Link href="/ComponetVideo"></Nav.Link>
            </Link>
            <Link to="/Notification">
              <img src={SvgMensajeW}/>
              <Nav.Link href="/Notification"></Nav.Link>
            </Link>
            
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
