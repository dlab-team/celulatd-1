import React, { useState} from "react";
import axios from "axios";
import NavbarUserComponent from "./NavbarUserComponet";
import Perfil from "./Perfil";

const SettingsUser = () => {
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
      <NavbarUserComponent/>
      <div className="container-responsive">
        {!isEditing ? (
          <div>
            <ul>
              <li>Name: {name}</li>
              <li>Telefone: {telefone}</li>
              <li>Email: {email}</li>
            </ul>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        ) : (
          <div>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={handleNameInputChange} />
            </div>
            <div>
              <label>Telefone:</label>
              <input type="text" value={telefone} onChange={handleTelefoneInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" value={email} onChange={handleEmailInputChange} />
            </div>
            <div>
              <button onClick={handleUploadPerfil}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <p>{uploadStatus}</p>
            </div>
           
          </div>
        )}
      </div>
      <Perfil/>
      </div>
    );
    };

    export default SettingsUser;