import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarUserComponent from "./NavbarUserComponet";

const ComponetVideoUser = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [video, setVideo] = useState(props.video);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    setVideo(props.video);
    setName(props.name);
    setDescription(props.description);
  }, [props.video, props.name, props.description]);

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setVideo(props.video);
    setName(props.name);
    setDescription(props.description);
  };

  const handleList = () => {
    const formData = new FormData();
    formData.append('video', video);
    formData.append('name', name);
    formData.append('description', description);
    axios.put(`/videos/${props.id}`, formData)
      .then(response => {
        setIsEditing(false);
        setVideo(response.data.video);
        setName(response.data.name);
        setDescription(response.data.description);
        setUploadStatus("Upload successful");
      })
      .catch(error => {
        console.log(error);
        setUploadStatus("Upload failed");
      });
  };



  return (
    <div className='container-responsive'>
      <NavbarUserComponent />
        <div>
          <video src={video} controls />
          <p>{name}</p>
          <p>{description}</p>
        </div>
    </div>
  );
};

export default ComponetVideoUser;
