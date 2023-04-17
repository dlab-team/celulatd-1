import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../../scssWeb/main.css";
import LogoSvg from "../../../assets/img/LogoVector.svg";
import FraseSvg from "../../../assets/img/Frase1Vector.svg";

export default function Register() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      // setError("Error al registrar el usuario.");
    }
  };

  const validateUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
    if (!usernameRegex.test(username)) {
      setUsernameError("El nombre de usuario solo debe contener letras y números minimo 4 caracteres y maximo 16 caracteres.");
    } else {
      setUsernameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("El correo electrónico debe tener un formato válido, por ejemplo: nombre@dominio.com");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{6,20}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("La contraseña debe incluir al menos 6 caracteres, una letra mayuscula, un numero y un simbolo ");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="container-user background-register">
      <div className="container-user-logo">
        <img src={LogoSvg} className="register-logo" />
        <img src={FraseSvg} className="register-logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateUsername}
        />
        {usernameError && <p>{usernameError}</p>}
        {!usernameError && username && <p style={{color: "green"}}>Usuario correcto</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <p>{emailError}</p>}
        {!emailError && email && <p style={{color: "green"}}>Email valido</p>}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <p>{passwordError}</p>}
        {!passwordError && password && <p style={{color: "green"}}>Contraseña válida</p>}
        <Link to="/" className="Link">
          <button type="submit">Registrarse</button>
        </Link>
      </form>
    </div>
  );
}


