import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import VideoUpload from "./video/VideoUploader";
import VideoList from "./video/ComponetVideo";
import Notification from "./Notification";
import { Link} from 'react-router-dom';

const Inicio = () => {
    return (
      <div className="container__Inicio">
     <NavbarComp/>
     <div className="container__componets">
        <div className="container__component__video">
        <Link to="/SubirVideo" className='Link'>
        <button>SubirVideo</button>
						</Link>
            </div>
            <div className="container__component__video">
            <Link to="/ListarVideo" className='Link'>
        <button >VideoList</button>
						</Link>
            </div>
            <div className="container__component__notification">
            <Link to="/Notification" className='Link'>
        <button >Notification</button>
						</Link>
            </div>
     </div>
      </div>
    );
  };
  
  export default Inicio;