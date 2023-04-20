import React from "react";
import InputHero from "./ImputHero";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import drafts from "../../../assets/img/draftsVerde.svg";
import logo3 from "../../../assets/img/logo3.svg";

import "../../../scss/components/landing/footer/_footer.scss";

export default function FooterLanding() {
  return (
    <div className="footer">
      <div className="izquierda">
        <div className="logo-and-title">
          <hr />
          <div className="logo-footer">
            <img src={logo3} />
            
          </div>

          <section className="titles">
            <h2>DESAFIO</h2>
            <h3>latam_</h3>
          </section>
        </div>
        <div className="redes">
          NUESTRAS REDES SOCIALES
          <br />
          <div className="icon-redes">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="centro">
        <h2>SUSCRÍBETE Y RECIBE NUESTRO BOLETÍN QUINCENAL </h2>
        <div className="ico-imput">
          <button className="caja-icono">
            <img className="iconofotter" src={drafts} />
          </button>
          <InputHero />
        </div>
      </div>
      <div className="derecha">
        <div className="contactos">
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
        
      </div>
    </div>
  );
}
