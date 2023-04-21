import React from 'react'
import llave1 from '../../../assets/img/landing_LlaveL.svg';
import llave2 from '../../../assets/img/landing_LlaveR.svg';
import '../../../scssWeb/main.css'


export default function SectionMain() {
  return (
    <div className='landing-call-to-action'>
      <div className='llave'>
        <img src={llave1} alt='' />
      </div>
      <div className='landing-texto'>
        <h2>¡ÚNETE A NUESTRO EQUIPO!</h2>
        <p>Nuestra comunidad busca brindar herramientas del área tecnológica a nuestros alumnos y  así puedan  desarrollar sus capacidades y encontrar un mejor futuro laboral.
          ¡Te invitamos a ser parte de nuestro desafío!</p>
      </div>
      <div className='llave'>
      <img src={llave2} alt=''/>
      </div>
    </div>
  )
}

