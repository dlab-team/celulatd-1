import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing2/LandingDlatam'
import Login from './components/user/login/Login';
import Register from './components/user/register/Register';
import Inicio from './components/dashboard/Inicio';
import Ajustes from './components/dashboard/Ajustes';
import VideoUploader from './components/dashboard/video/VideoUploader';
import ListVideo from './components/dashboard/video/ListVideo';
import Notification from './components/dashboard/notification/Notification';
import ComponetVideoUser from './components/user/dashboard/ComponetVideoUser';
import NavbarVideo from './components/dashboard/video/NavbarVideo.js';
import NavbarVideoRead from './components/dashboard/video/NavbarDocument.js';
import Statistics from './components/dashboard/statistics/Statistics';
import SettingsUser from './components/user/dashboard/SettingsUser';
import InicioUser from './components/user/dashboard/Inicio';
import NotificationUser from './components/dashboard/notification/Notification';
import Perfil from './components/dashboard/Perfil';
import Error404 from './components/common/Error404';
import ListNotifications from './components/dashboard/notification/ListNotifications';
import Trash from './components/dashboard/notification/Trash';
import ListDocument from './components/dashboard/video/ListDocument';
import DocumentUploader from './components/dashboard/video/DocumentUploader';
import LandingDlatam from './components/landing2/LandingDlatam';
import './scssWeb/main.css';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route exact path="/Inicio" element={<Inicio />} />
      <Route path="/ajustes" element={<Ajustes />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/VideoUploader" element={<VideoUploader />} />
      <Route path="/ListVideo" element={<ListVideo />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="*" element={<Error404 />} />
      {/* <Route path="/DashboardUser" element={<DashboardUser />} /> */}
      <Route path='/ComponetVideoUser' element={<ComponetVideoUser />} />
      <Route path="/NavbarVideo" element={<NavbarVideo />} />
      <Route path="/NavbarVideoRead" element={<NavbarVideoRead />} />
      <Route path="/Statistics" element={<Statistics />} />
      <Route path="/SettingsUser" element={<SettingsUser />} />
      <Route path="/InicioUser" element={<InicioUser />} />
      <Route path="/NotificationUser" element={<NotificationUser />} />
      <Route path="/ListNotifications" element={<ListNotifications />} />
      <Route path="/Trash" element={<Trash />} />
      <Route path="/ListDocument" element={<ListDocument />} />
      <Route path="/DocumentUploader" element={<DocumentUploader />} />
      <Route path="/LandingDlatam" element={<LandingDlatam />} />
    </Routes >

  );
}

export default App;