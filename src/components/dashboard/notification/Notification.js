import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import Uploadbutton from "../../../assets/img/Uploadbutton.svg";
import Header from "../../common/header";
import MensajeSvg from "../../../assets/img/SvgMensaje.svg";
import NavbarNotification from "../notification/NabvarNotifcation";

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
      <NavbarNotification/>
      <div className="barra">
        <img className="svg-img-barra" src={MensajeSvg} />
        <h2>NOTIFICACIONES</h2>
      </div>
      <div className=" container-body-all">
        <div className="container-recive-info container-recive_body">
          <label className="recive_title">
            <h2>Titulo:</h2>
          </label>
          <input
            className="recive_input"
            type="text"
            value={title}
            onChange={handleTitleInputChange}
          />
        </div>
        <div className="container-recive-info container_recive">
        <label className="recive_title">
            <h2>Mensaje:</h2>
          </label>
          <input
            className="recive_input recive_input-height"
            type="text"
            value={description}
            onChange={handleDescriptionInputChange}
          />
        </div>
        <div className="imagen-uploader">
          <button onClick={handleUploadClick}>
            <img src={Uploadbutton} alt="Enviar"></img>
            <h2>Enviar</h2>
          </button>
        </div>
        <p>{uploadStatus}</p>
      </div>
    </div>
  );
};

export default Notification;
