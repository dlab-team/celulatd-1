import React from 'react';

import '../../../scss/components/landing/body/_experiencia.scss';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import communication from '../../../assets/img/communication.svg';

export default function Experiencia() {
  return (
    <div className='experiencia' id= 'experiencia'>
      <div className='titulos'>
        <h2>EXPERIENCIA</h2>
        <h3>ESTUDIANTIL</h3>
      </div>
      <div className='logo-container'>
        <button className='logo'>
        <img src={communication}/>
        </button>
      </div>
    </div>
  )
}
