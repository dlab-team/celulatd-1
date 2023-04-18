import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeWSvg from "../../assets/img/home_W.svg";
import "../../scssWeb/main.css";
import AjusteWt from "../../assets/img/settings_W.svg";
import SvgMensajeW from "../../assets/img/notifications_W.svg";
import SvgSubirVidW from "../../assets/img/upload_W.svg";
import MiniRecursos from "../../assets/img/video_library_W.svg";
import Metricassvg from "../../assets/img/data_thresholding_W.svg";

function NavbarComponent() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} id= "navbar-user" className="navbar-background">
          <div className="navbar-admin-all">
            {" "}
            <Link to="/Inicio" >
              <img src={HomeWSvg}/>
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
            <Link to="/ListVideo">
              <img src={MiniRecursos}/>
              <Nav.Link href="/ListVideo"></Nav.Link>
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
