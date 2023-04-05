import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarUserComponent from "./NavbarUserComponet";

const ComponetVideoUser = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [video, setVideo] = useState(props.video);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [uploadStatus, setUploadStatus] = useState("");
  const [videos, setVideos] = useState([]);

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

  const fetchVideo = () => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyDCtEVPUK8m7rLK9kchfGifpEdaGk8Zxk8',
        q: name,
        part: 'snippet',
        maxResults: 1,
      },
    }).then(response => {
      const videoId = response.data.items[0].id.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      setVideo(videoUrl);
      setUploadStatus("Upload successful");
    }).catch(error => {
      console.error(error);
      setUploadStatus("Upload failed");
    });
  };

  const fetchRandomVideos = () => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyDCtEVPUK8m7rLK9kchfGifpEdaGk8Zxk8',
        q: 'videos',
        part: 'snippet',
        maxResults: 5,
      },
    }).then(response => {
      setVideos(response.data.items);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='container-responsive'>
      <NavbarUserComponent />
      <div>
        <video src={video} controls />
        <p>{name}</p>
        <p>{description}</p>
        <button onClick={fetchVideo}>Obtener video</button>
        <button onClick={fetchRandomVideos}>Obtener videos aleatorios</button>
        <ul>
          {videos.map((item, index) => (
            <li key={index}>
              <spam href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>{item.snippet.title}</spam>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};

export default ComponetVideoUser;
