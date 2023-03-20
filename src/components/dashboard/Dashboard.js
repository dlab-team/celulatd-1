import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoUploader from "./video/VideoUploader";
import VideoList from "./video/VideoList";
import NavbarComp from "./NavbarComponent";




const Dashboard = () => {
    return (
      <div className="dashboard-wrapper">
     <NavbarComp/>
     
      </div>
    );
  };
  
  export default Dashboard;