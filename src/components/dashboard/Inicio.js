import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import VideoUpload from "./video/VideoUploader";
import VideoList from "./video/ComponetVideo";
import Notification from "./Notification";
import { Link} from 'react-router-dom';
import "../../scssWeb/main.css";
import VectorSubirVid from '../../assets/img/VectorSubirVid.svg';
import Recursos from '../../assets/img/Recursos.svg';
import SvgMensaje from '../../assets/img/SvgMensaje.svg';
import CasaVerdeSvg from '../../assets/img/CasaVerdeSvg.svg';


const Inicio = () => {
    return (
      <div className="container_inicio">
        <NavbarComp />
        <div className="container_componets">
          <div className="barra">
            <img src={CasaVerdeSvg}/>
            <p>INICIO</p>
          </div>
          <div className="container_body">
            <div className="container_component_all container_component-background_resources">
              <Link to="/SubirVideo" className="Link">
                <img src={VectorSubirVid}/>
                <button>{"Subir  Recursos"} </button>
              </Link>
            </div>
            <div className="container_component_all container_component-background_video">
              <Link to="/ListarVideo" className="Link">
                <img src={Recursos}/>
                <button>Recursos</button>
              </Link>
            </div>
            <div className="container_component_all container_component-background_notification">
              <Link to="/Notification" className="Link">
                <img src={SvgMensaje}/>
                <button>Mensajes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Inicio;