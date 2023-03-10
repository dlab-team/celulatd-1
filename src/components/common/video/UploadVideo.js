import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const videoRef = storageRef.child(`videos/${file.name}`);
    videoRef.put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        const videoData = {
          title: title,
          description: description,
          url: url,
        };
        firebase.database().ref('videos').push(videoData);
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={title} onChange={handleTitleChange} />
    <input type="text" value={description} onChange={handleDescriptionChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadVideo;
