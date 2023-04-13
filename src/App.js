import React from 'react';
import './scssWeb/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Login from './components/user/login/Login';
import Register from './components/user/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Inicio from './components/dashboard/Inicio';
import Ajustes from './components/dashboard/Ajustes';
import VideoUploader from './components/dashboard/video/VideoUploader';
import ComponetVideo from './components/dashboard/video/ComponetVideo';
import Notification from './components/dashboard/Notification';
import DashboardUser from './components/user/dashboard/DashboardUser';
import ComponetVideoUser from './components/user/dashboard/ComponetVideoUser';
import NavbarVideo from './components/dashboard/video/NavbarVideo.js';
import Statistics from './components/dashboard/statistics/Statistics';
import SettingsUser from './components/user/dashboard/SettingsUser';
import InicioUser from './components/user/dashboard/Inicio';
import NotificationUser from './components/user/dashboard/Notification';
import Perfil from './components/dashboard/Perfil';
import VideoList from './components/dashboard/video/VideoList';
import Error404 from './components/common/Error404';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/Inicio" element={<Inicio />} />
      <Route path="/ajustes" element={<Ajustes />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/VideoUploader" element={<VideoUploader />} />
      <Route path="/ComponetVideo" element={<ComponetVideo />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/DashboardUser" element={<DashboardUser />} />
      <Route path='/ComponetVideoUser' element={<ComponetVideoUser />} />
      <Route path="/NavbarVideo" element={<NavbarVideo />} />
      <Route path="/Statistics" element={<Statistics />} />
      <Route path="/SettingsUser" element={<SettingsUser />} />
      <Route path="/InicioUser" element={<InicioUser />} />
      <Route path="/NotificationUser" element={<NotificationUser />} />
      <Route path="/VideoList" element={<VideoList />} />
     

  </Routes >
  
  );
}

export default App;
