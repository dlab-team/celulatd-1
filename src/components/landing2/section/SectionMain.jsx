import React from 'react'

import '../../../scss/components/landing/body/_callToAction.scss';
import llave1 from '../../../assets/img/llave1.svg';
import llave2 from '../../../assets/img/llave2.svg';

export default function SectionMain() {
  return (
    <div className='call-to-action'>
      {/* <h2>{'\{¡Unete a nuestro equipo!\}'}</h2> */}
      <div className='llave1'>
        <img src={llave1} />
      </div>
      <div className='texto'>
        <h2>¡ÚNETE A NUESTRO EQUIPO!</h2>
        <p>Lorem ipsum dolor sit amet
          consectetur. Adipiscing suscipit
          sed elit cursus dui lorem
          donec. Quis porta at adipiscin</p>
      </div>
      <div className='llave2'>
      <img src={llave2}/>
      </div>
    </div>
  )
}

