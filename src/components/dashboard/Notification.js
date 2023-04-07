import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "./NavbarComponent";
import "../../../src/scssWeb/main.css";
import Uploadbutton from '../../assets/img/Uploadbutton.svg'
import Header from "../../components/common/header";
import MensajeSvg from '../../assets/img/SvgMensaje.svg';




const Notification = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");


  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };


  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    axios
      .post("https://example.com/upload-notification", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadStatus(`Upload progress: ${percentCompleted}%`);
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploadStatus("Upload successful");
      })
      .catch((error) => {
        console.error(error);
        setUploadStatus("Upload failed");
      });
  };

  return (
    <div>
       <Header />
        <NavbarComp />     
          <div className="barra">
            <img className="svg-img-barra" src={MensajeSvg}/>
            <p>NOTIFICACIONES</p>
          </div>   
      <div className="container-body-all container-message_body">
        <div>
        <label><p>Titulo:</p></label>
        <input classname="container-message_title-height" type="text" value={title} onChange={handleTitleInputChange} />
      </div>
      <div>
        <label ><p>Mensaje:</p></label>
        <input className="container-message_description-height" type="text" value={description} onChange={handleDescriptionInputChange} />
      </div>
      <div className="container-message_button_upload">
        <button onClick={handleUploadClick}>
          <img src={Uploadbutton} alt="Enviar"></img>
          <h2>Enviar</h2>
          </button>
      </div>
      <p>{uploadStatus}</p>
      </div>
      
    </div>
  );
}

export default Notification;