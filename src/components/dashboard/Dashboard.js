import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import VideoList from "./video/ComponetVideo";

const Dashboard = () => {
    return (
      <div className="container-responsive">
     <VideoList/>
     
      </div>
    );
  };
  
  export default Dashboard;