import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "./NavbarComponent";
import Perfil from "./Perfil";
import "../../scssWeb/main.css";
import Header from "../../components/common/header";
import AjustesSvg from "../../assets/img/AjusteWt.svg";
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
          <img className="svg-img-barra" src={AjustesSvg} />
          <h2>AJUSTES</h2>
        </div>
      <div className="container-body-all container-settings_body">
        {!isEditing ? (
       <div className="container-settings_body-profile">   
          <div>
          <img src={avatar} alt="profile" />
          </div>
        <div>
        <ul>
          <li>NOMBRE: {name}</li>
          <li>TELEFONO: {telefone}</li>
          <li>EMAIL: {email}</li>
        </ul>
        </div>
        <div>
        <button className="body-button-all" onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      </div>
         
        ) : (
        <div className="container-settings_body-edit">
          <div>
              <label>NOMBRE:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameInputChange}
              />
          </div>
          <div>
              <label>TELEFONO:</label>
              <input
                type="text"
                value={telefone}
                onChange={handleTelefoneInputChange}
              />
          </div>
          <div>
              <label>EMAIL:</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailInputChange}
              />
          </div>
          <div className="body-button-edit-all">
              <button onClick={handleUploadPerfil}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
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
