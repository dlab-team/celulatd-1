import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import NavbarVideoRead from "./NavbarDocument.js";
import RecursosSvg from "../../../assets/img/video_library_G.svg";
import Header from "../../../components/common/header.js";
import "../../../scssWeb/main.css";

const ComponetVideo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [video, setVideo] = useState(props.video);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [uploadStatus, setUploadStatus] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = "fpCsO7Yqx44FzOmNaNwHa64MqiGz6UCItjERAeDRLOfxH6nnt5OZja8K";
    const PER_PAGE = 10;
    const PAGE = 1;
    const QUERY = "programming";

    axios
      .get(
        `https://api.pexels.com/videos/search?query=${QUERY}&per_page=${PER_PAGE}&page=${PAGE}`,
        {
          headers: { Authorization: API_KEY },
        }
      )
      .then((response) => {
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleSave = () => {
    const formData = new FormData();
    formData.append("video", video);
    formData.append("name", name);
    formData.append("description", description);
    axios
      .put(`/videos/${props.id}`, formData)
      .then((response) => {
        setIsEditing(false);
        setVideo(response.data.video);
        setName(response.data.name);
        setDescription(response.data.description);
        setUploadStatus("Upload successful");
      })
      .catch((error) => {
        console.log(error);
        setUploadStatus("Upload failed");
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/videos/${props.id}`)
      .then(() => {
        props.onDelete();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-responsive">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={RecursosSvg} />
        <h2>RECURSOS</h2>
      </div>
      <div className="container-body-all-video">
        <NavbarVideoRead />
        <div className="container-componentvideo_flex">
          {isEditing ? (
            <div className="container-componentvideo_body">
              <input type="file" name="video" onChange={handleVideoChange} />
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
              <div className="body-button-edit-all">
                <button onClick={handleSave}>Guardar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="container-componentvideo_flex">
              {videos.map((video) => (
                <div className="container-componentvideo_body" key={video.id}>
                  <video src={video.video_files[0].link} controls />
                  <h2>{video.user.name}</h2>
                  <p>{video.url}</p>
                  <div className="body-button-edit-all">
                    <button onClick={() => handleDelete(video.id)}>
                      Eliminar
                    </button>
                    <button
                      onClick={() => console.log(`Editando video ${video.id}`)}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              ))}
              <div className="body-button-edit-all">
                <button onClick={handleSave}>Guardar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </div>
            </div>
          )}
          <p>{uploadStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default ComponetVideo;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavbarComp from "../NavbarComponent";
// import NavbarVideoRead from "./NavbarDocument.js";
// import RecursosSvg from "../../../assets/img/video_library_G.svg";
// import Header from "../../../components/common/header.js";
// import "../../../scssWeb/main.css";

// const ComponetVideo = (props) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [video, setVideo] = useState(props.video);
//   const [name, setName] = useState(props.name);
//   const [description, setDescription] = useState(props.description);
//   const [uploadStatus, setUploadStatus] = useState("");

//   useEffect(() => {
//     setVideo(props.video);
//     setName(props.name);
//     setDescription(props.description);
//   }, [props.video, props.name, props.description]);

//   const handleVideoChange = (event) => {
//     setVideo(event.target.files[0]);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setVideo(props.video);
//     setName(props.name);
//     setDescription(props.description);
//   };

//   const handleSave = () => {
//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("name", name);
//     formData.append("description", description);
//     axios
//       .put(`/videos/${props.id}`, formData)
//       .then((response) => {
//         setIsEditing(false);
//         setVideo(response.data.video);
//         setName(response.data.name);
//         setDescription(response.data.description);
//         setUploadStatus("Upload successful");
//       })
//       .catch((error) => {
//         console.log(error);
//         setUploadStatus("Upload failed");
//       });
//   };

//   const handleDelete = () => {
//     axios
//       .delete(`/videos/${props.id}`)
//       .then(() => {
//         props.onDelete();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <NavbarComp />
//       <div className="barra">
//         <img className="svg-img-barra" src={RecursosSvg} />
//         <h2>RECURSOS</h2>
//       </div>
//       <div className="container-body-all">
//       <NavbarVideoRead />
//         <div className="container-componentvideo_flex">
//           {isEditing ? (
//             <div className="container-componentvideo_body">
//               <input type="file" name="video" onChange={handleVideoChange} />
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={description}
//                 onChange={handleDescriptionChange}
//               />
//               <div className="body-button-edit-all">
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={handleCancelEdit}>Cancelar</button>
//               </div>
//             </div>
//           ) : (
//             <div className="container-component-video-info">
//               <video src={video} controls />
//               <h2>{name}</h2>
//               <p>{description}</p>
//               <div className="body-button-edit">
//                 <button onClick={handleEdit}>Editar</button>
//                 <button onClick={handleDelete}>Eliminar</button>
//               </div>
//             </div>
//           )}
//           <p>{uploadStatus}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComponetVideo;
