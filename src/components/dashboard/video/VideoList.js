import React, { useState, useEffect } from "react";
import axios from "axios";

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = "fpCsO7Yqx44FzOmNaNwHa64MqiGz6UCItjERAeDRLOfxH6nnt5OZja8K";
    const PER_PAGE = 10;
    const PAGE = 1;
    const QUERY = "programming";

    axios
      .get(`https://api.pexels.com/videos/search?query=${QUERY}&per_page=${PER_PAGE}&page=${PAGE}`, {
        headers: { Authorization: API_KEY }
      })
      .then(response => {
        setVideos(response.data.videos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/videos/${id}`).then(() => {
      setVideos(videos.filter((video) => video.id !== id));
    });
  };

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <video src={video.video_files[0].link} controls />
          <h2>{video.user.name}</h2>
          <p>{video.url}</p>
          <button onClick={() => handleDelete(video.id)}>Eliminar</button>
          <button onClick={() => console.log(`Editando video ${video.id}`)}>
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
