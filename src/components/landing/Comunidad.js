import React from 'react';

import '../../scss/components/landing/_comunidad.scss';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Comunidad() {
  return (
    <div className='comunidad'>
      <div className='titulos'>
        <h2>COMUNIDAD</h2>
        <h3>{'\{D\} LATAM_'}</h3>
      </div>
      <div className='logo-container'>
        <button className='logo'>
          <FaTwitter />
        </button>
      </div>
    </div>
  )
}
