import React, { useState, useEffect } from "react";
import axios from "axios";
 import NavbarComponent from "../NavbarComponent";
 
const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("https://example.com/videos").then((response) => {
      setVideos(response.data);
    });
  }, []);

  const handleEditClick = (id, newTitle, newDescription) => {
    axios
      .put(`https://example.com/videos/${id}`, {
        title: newTitle,
        description: newDescription,
      })
      .then((response) => {
        setVideos(
          videos.map((video) =>
            video.id === id ? { ...video, title: newTitle, description: newDescription } : video
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`https://example.com/videos/${id}`)
      .then((response) => {
        setVideos(videos.filter((video) => video.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
       <NavbarComponent/>
    <div className="Container">
      {videos.length === 0 ? (
        <><p>No hay videos disponibles</p>
        <h2>Sin titulo</h2>
      <p>Sin descripcion</p>
      <video width="320" height="240" controls>
            <source src={""} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <button onClick={() => handleEditClick("", "New Title", "New Description")}>Edit</button>
            <button onClick={() => handleDeleteClick("")}>Delete</button>
          </div>
      </>
      ) : (
      <div>
      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <video width="320" height="240" controls>
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <button onClick={() => handleEditClick(video.id, "New Title", "New Description")}>Edit</button>
            <button onClick={() => handleDeleteClick(video.id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
      )}
    </div>
    </div>
  );
};

export default VideoList;
