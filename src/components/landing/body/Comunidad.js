import React from 'react';

import '../../../scss/components/landing/body/_comunidad.scss';

import groups from '../../../assets/img/groups.svg';

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
        <img src={groups} />
        </button>
      </div>
    </div>
  )
}
