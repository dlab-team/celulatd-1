import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import Header from "../../components/common/header";
import AjustesSvg from '../../assets/img/AjusteWt.svg';
// OJO!!!! DEFINIR QUE PAGINA ES DASHBOARD
const Dashboard = () => {
    return (
      <div className="container-responsive">
      <Header />
        <NavbarComp />
        <div className="container_componets">
          <div className="barra">
            <img className="svg-img-barra" src={AjustesSvg}/>
            <p>DASHBOARD</p>
          </div>
          </div>
      </div>
    );
  };
  
  export default Dashboard;