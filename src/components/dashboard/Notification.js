import React, { useState} from "react";
import axios from "axios";
import NavbarComponent from "./NavbarComponent";

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
      .post("https://example.com/post-notification", formData, {
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
      <NavbarComponent/>
      <div className="container-responsive">
        <label className="container__label__title">Title:</label>
        <input className="container__title__input" type="text" value={title} onChange={handleTitleInputChange} />
      </div>
      <div  className="container__description" >
        <label className="container__label__description">Description:</label>
        <input className="container__imput_description" type="text" value={description} onChange={handleDescriptionInputChange} />
      </div>
      <div className="container__button_upload">
        <button onClick={handleUploadClick}>Upload</button>
      </div>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default Notification;