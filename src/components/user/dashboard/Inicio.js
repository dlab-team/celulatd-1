import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from 'react-router-dom';
import NavbarUserComponent from "./NavbarUserComponet";


function InicioUser() {
  return (
    <div className="container__Inicio">
      <NavbarUserComponent />
      <div className="container__componets">
        <div className="container__component__video">
          <Link to="/ComponetVideoUser" className='Link'>
            <button>Lista video</button>
          </Link>
        </div>
        <div className="container__component__notification">
          <Link to="/NotificationUser" className='Link'>
            <button>Notificaciones</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
  
  export default InicioUser;