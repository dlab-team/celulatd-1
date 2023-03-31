import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import VideoUpload from "./video/VideoUploader";
import VideoList from "./video/ComponetVideo";
import Notification from "./Notification";
import { Link} from 'react-router-dom';
import '../../scss/components/dashboard/inicio/_inicio.scss'
import VectorSubirVid from '../../assets/img/VectorSubirVid.svg';
import Recursos from '../../assets/img/Recursos.svg';
import SvgMensaje from '../../assets/img/SvgMensaje.svg';
import CasaVerdeSvg from '../../assets/img/CasaVerdeSvg.svg';


const Inicio = () => {
    return (
      <div className="container__inicio">
        <NavbarComp />
        <div className="container__componets">
          <div className="barra">
            <img src={CasaVerdeSvg} className="icono-inicio" />
            <p className="barra-texto">INICIO</p>
          </div>
          <div className="container_body">
            <div className="container__component__resources container__component__all">
              <Link to="/SubirVideo" className="Link">
                <img src={VectorSubirVid} className="inicio-svg" />
                <button className="btn-inicio">{"Subir  Recursos"} </button>
              </Link>
            </div>
            <div className="container__component__video container__component__all">
              <Link to="/ListarVideo" className="Link">
                <img src={Recursos} className="inicio-svg" />
                <button className="btn-inicio">Recursos</button>
              </Link>
            </div>
            <div className="container__component__notification container__component__all">
              <Link to="/Notification" className="Link">
                <img src={SvgMensaje} className="inicio-svg" />
                <button className="btn-inicio">Mensajes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Inicio;