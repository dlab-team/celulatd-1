import React from 'react'

import background from '../../assets/img/background.jpg';
import '../../scss/components/landing/_backgroundHero.scss';


export default function Background() {
  return (
    <div className='background-hero'>
      <div>
      <img src={background}/> 
      </div>
         

    </div>
  )
}
