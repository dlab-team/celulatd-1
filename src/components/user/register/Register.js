import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../../scssWeb/main.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://mi-api.com/register", {
        username,
        email,
        password,
      });

      console.log(response.data);
    } catch (err) {
      setError("Error al registrar el usuario.");
    }
  };

  return (
  <div className="container-user">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <Link to="/*" className='Link'>
      <button type="submit">Registrarse</button>  
        </Link> 
     
    </form>
  </div>
  );
}


