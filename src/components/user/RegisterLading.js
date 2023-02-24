import React, { useState } from "react";
import axios from "axios";

function Registernewsletter() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://mi-api.com/newsletter", {
        username,
        email,
        phone,
        lastname,
      });

      console.log(response.data);
    } catch (err) {
      setError("Error al registrar el usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       <input
        type="lastname"
        placeholder="Apellido de usuario"
        value={lastname}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="phone"
        placeholder="Numero de teléfono"
        value={phone}
        onChange={(e) => setLastname(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registernewsletter;
