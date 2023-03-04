import React from 'react';

//import '../../scss/components/landing/_logoNav.scss';
import Logo1 from '../../../assets/img/Logo1.svg';

import '../../../scss/components/landing/header/_logoNav.scss'; 

export default function Logo() {
  return (
     <div className='logo-nav'>
      <img className='imagen' src={Logo1}/> 
    </div>
    )
  }