import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../../../scssWeb/main.css";
import LogoSvg from "../../../assets/img/LogoVector.svg";
import FraseSvg from "../../../assets/img/Frase1Vector.svg";

export default function Register() {

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", photo: "" });
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post("http://localhost:3000/user/register", formData, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        photo: "no-photo"
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })

      console.log(formData.data);
      navigate("/login");
    } catch (err) {
      setError("Error al registrar el usuario.");
    }
  };

  const validateUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
    if (!usernameRegex.test(formData.name)) {
      setUsernameError("El nombre de usuario solo debe contener letras y números minimo 4 caracteres y maximo 16 caracteres.");
    } else {
      setUsernameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("El correo electrónico debe tener un formato válido, por ejemplo: nombre@dominio.com");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {
    const PhoneRegex = 0;
    if (!PhoneRegex.test(formData.phone)) {
      setEmailError("El numero de telefono debe ser al menos 8 numeros");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{6,20}$/;
    if (!passwordRegex.test(formData.password)) {
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
      <form component="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={validateUsername}
        />
        {usernameError && <p>{usernameError}</p>}
        {!usernameError && formData.name && <p style={{ color: "green" }}>Usuario correcto</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={validateEmail}
        />
        <input
          type="phone"
          placeholder="Telefono"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onBlur={validatePhone}
        />
        {emailError && <p>{emailError}</p>}
        {!emailError && formData.email && <p style={{ color: "green" }}>Email valido</p>}
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          onBlur={validatePassword}
        />
        {passwordError && <p>{passwordError}</p>}
        {!passwordError && formData.password && <p style={{ color: "green" }}>Contraseña válida</p>}
        <button className="Link" type="submit">Registrarse</button>
      </form>
    </div>
  );
}


