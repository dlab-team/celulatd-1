import React from 'react'

import '../../scss/components/landing/_callToAction.scss';


export default function CallToAction() {
  return (
    <div className='call-to-action'>
      {/* <h2>{'\{¡Unete a nuestro equipo!\}'}</h2> */}
      <div className='llave1'>
        {'\{'}
      </div>
      <div className='texto'>
        <h2>¡ÚNETE A NUESTRO EQUIPO!</h2>
        <p>Lorem ipsum dolor sit amet
          consectetur. Adipiscing suscipit
          sed elit cursus dui lorem
          donec. Quis porta at adipiscin</p>
      </div>
      <div className='llave2'>
        {'\}'}
      </div>
    </div>
  )
}

