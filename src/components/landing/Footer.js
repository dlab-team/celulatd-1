import React from 'react'
import InputHero from '../common/Input';
import Titles from './Titles';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import '../../scss/components/landing/_footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <h2>SUSCRÍBETE Y RECIBE
                NUESTRO BOLETÍN QUINCENAL </h2>
            <div className='ico-imput'>
                <button className='caja-icono'><FaTwitter className='icon' /></button>
                <InputHero />
            </div>
            <div className='contactos'>
                NUESTROS CONTACTOS
                <br />
                <br />
                Dudas y consultas
                <br />
                sos@desafiolatam.com
                <br />
                <br />
                Ayuda técnica
                <br />
                ayuda@desafiolatam.com
                <br />
                <br />
            </div>
            <div className='redes'>
                NUESTRAS REDES SOCIALES
                <br />
                <div className='icon-redes'>
                    <FaInstagram />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </div>
            <div className='logo-and-title'>
                <hr/>
            <div className='logo-footer'>
                <h1>{'\{D\}'}</h1>
            </div>
            <section className='titles'>
                <h2>DESAFIO</h2>
                <h3>latam_</h3>
            </section>
            </div>



        </div>
    )
}
