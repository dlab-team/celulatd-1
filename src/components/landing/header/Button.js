import React from 'react'
import { Link } from 'react-router-dom';
import '../../../scss/components/landing/header/_button.scss';

export default function Button() {
  return (
    <div className='container-btn'>
      <Link to="/login" className='Link'>
      <button className='btn'   >    
        {'\{ENTRAR\}'}
        </button>    
        </Link> 
    </div>
  )
}
/*

CUANDO LA LADDING ESTE LISTA CREAR COMPONENTE BUTTON EN COMMONS PARA REUTILIZARLO EN TODAS LAS PAGINAS DONDE SE NECESITEN ACCESOS A OTRAS PAG EJEM: REGISTRO,USER..ETC.


*/