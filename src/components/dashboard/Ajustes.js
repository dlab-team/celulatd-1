import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "./NavbarComponent";
import Perfil from "./Perfil";
import "../../scssWeb/main.css";
import Header from "../../components/common/header";
import AjustesGSvg from "../../assets/img/settings_G.svg";
import avatar from "../../assets/img/personatipo.png";

const Settings = () => {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setMail] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleTelefoneInputChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setMail(event.target.value);
  };

  const handleUploadPerfil = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("telefone", telefone);
    formData.append("email", email);
    axios
      .post("https://example.com/admin/edit", formData, {
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
        setIsEditing(false);
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
          <img className="svg-img-barra" src={AjustesGSvg} />
          <h2>AJUSTES</h2>
        </div>
      <div className="container-body-all container-settings_body container-body-all-position">
        {!isEditing ? (
       <div className="container-settings_body-profile">   
          <div>
          <img src={avatar} alt="profile" />
          </div>
        <div>
        <ul>
          <li><p>NOMBRE: {name}</p></li>
          <li><p>TELEFONO: {telefone}</p></li>
          <li><p>EMAIL: {email}</p></li>
        </ul>
        </div>
        <div>
        <button className="body-button-all" onClick={() => setIsEditing(true)}><p>Editar</p></button>
        </div>
      </div>
         
        ) : (
        <div className="container-settings_body-edit">
          <div>
              <label><p>NOMBRE:</p></label>
              <input
                type="text"
                value={name}
                onChange={handleNameInputChange}
              />
          </div>
          <div>
              <label><p>TELEFONO:</p></label>
              <input
                type="text"
                value={telefone}
                onChange={handleTelefoneInputChange}
              />
          </div>
          <div>
              <label><p>EMAIL:</p></label>
              <input
                type="text"
                value={email}
                onChange={handleEmailInputChange}
              />
          </div>
          <div className="body-button-edit-all">
              <button onClick={handleUploadPerfil}><p>Save</p></button>
              <button onClick={() => setIsEditing(false)}><p>Cancel</p></button>
              <p>{uploadStatus}</p>
          </div>
        </div>
        )}
      
    </div>
    {/* <Perfil /> */}
  </div>
  );
};

export default Settings;
