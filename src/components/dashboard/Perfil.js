// import React, { useState} from "react";
// import axios from "axios";
// import "../../scssWeb/main.css";
// import avatar from "../../assets/img/personatipo.png";



// const Perfil = () => {
//   const [name, setName] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [email, setMail] = useState("");
//   const [image, setImage] = useState("");
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleNameInputChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleTelefoneInputChange = (event) => {
//     setTelefone(event.target.value);
//   };

//   const handleEmailInputChange = (event) => {
//     setMail(event.target.value);
//   };
  
//   const handleImageInputChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleUploadPerfil = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("telefone", telefone);
//     formData.append("email", email);
//     formData.append("image", image);
//     axios
//       .post("https://example.com/admin/edit", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadStatus(`Upload progress: ${percentCompleted}%`);
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         setUploadStatus("Upload successful");
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setUploadStatus("Upload failed");
//       });
//   };

//   return (
//     <div>
       
//       <div className="container-profile_body">
//         {!isEditing ? (
//           <div>
//             {/* <img src={image ? URL.createObjectURL(image) : ""} alt="profile" /> */}
//             {/* OJO HAY QUE CAMBIAR ESTO POR LA IMAGEN DE LA BASE DATOS NO BORRAR LINEA 68 */}
//             <div>
//               <img src={avatar} alt="profile" />
//               </div>
//             <div>
//             <ul>
//               <li>NOMBRE: {name}</li>
//               <li>TELEFONO: {telefone}</li>
//               <li>EMAIL: {email}</li>
//             </ul>
//             </div>
//             <div>
//             <button onClick={() => setIsEditing(true)}>Editar</button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div>
//               <label>NOMBRE:</label>
//               <input type="text" value={name} onChange={handleNameInputChange} />
//             </div>
//             <div>
//               <label>TELEFONO:</label>
//               <input type="text" value={telefone} onChange={handleTelefoneInputChange} />
//             </div>
//             <div>
//               <label>EMAIL:</label>
//               <input type="text" value={email} onChange={handleEmailInputChange} />
//             </div>
//             <div>
//               <label>FOTO:</label>
//               <input type="file" onChange={handleImageInputChange} />
//             </div>
//             <div>
//               <button onClick={handleUploadPerfil}>Save</button>
//               <button onClick={() => setIsEditing(false)}>Cancel</button>
//               <p>{uploadStatus}</p>
//             </div>
           
//           </div>
//         )}
//       </div>
//       </div>
//     );
//     };

//     export default Perfil;