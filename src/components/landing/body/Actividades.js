import React from 'react';

import '../../../scss/components/landing/body/_actividades.scss';

import calendar from '../../../assets/img/calendar.svg';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Actividades() {
  return (
    <div className='actividades'>
      <div className='titulos'>
        <h2>AGENDA</h2>
        <h3>ACTIVIDADES</h3>
      </div>
      <div className='logo-container'>
        <button className='logo'>
        <img src={calendar}/>
        </button>
      </div>
    </div>
  )
}
