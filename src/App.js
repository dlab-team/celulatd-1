import React from 'react';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Login from './components/user/login/Login';
import Register from './components/user/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Inicio from './components/dashboard/Inicio';
import Ajustes from './components/dashboard/Ajustes';
import Perfil from './components/dashboard/Perfil';
import VideoUploader from './components/dashboard/video/VideoUploader';
import ComponetVideo from './components/dashboard/video/ComponetVideo';
import Notification from './components/dashboard/Notification';

function App() {
  return (
 
    <Routes>
    <Route exact path="/" element={<Landing/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/Inicio" element={<Inicio/>} />
    <Route path="/ajustes" element={<Ajustes/>} />
    <Route path="/perfil" element={<Perfil/>} />
    <Route path="/SubirVideo" element={<VideoUploader/>}/>
		<Route path="/ListarVideo" element={<ComponetVideo/>}/>
		<Route path="/Notification" element={<Notification/>}/>
    <Route path="*" element="Error" />
  </Routes>
  
  );
}

export default App;
