import React from 'react';

import '../../scss/components/landing/_experiencia.scss';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Experiencia() {
  return (
    <div className='experiencia'>
      <div className='titulos'>
        <h2>EXPERIENCIA</h2>
        <h3>ESTUDIANTIL</h3>
      </div>
      <div className='logo-container'>
        <button className='logo'>
          <FaTwitter />
        </button>
      </div>
    </div>
  )
}
