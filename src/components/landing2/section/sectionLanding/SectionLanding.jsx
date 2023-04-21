import React from 'react'
import ArticleLanding from './ArticleLanding';
import card1 from '../../../../assets/img/Landing_card1.jpg';
import card2 from '../../../../assets/img/Landing_card2.jpg';
import card3 from '../../../../assets/img/Landing_card3.jpg';
import menorque from '../../../../assets/img/landing_Menor_W.svg';
import slash from '../../../../assets/img/landing_Slash_W.svg';
import mayorque from '../../../../assets/img/landing_Mayor_W.svg';

export default function SectionLanding() {
    return (
        <>
            <div className="landing-card-all">
                <div className="landing-card1-bg">
                    <ArticleLanding
                        svgArticle={menorque}
                        imgArticle={card1}
                        titleArticle="Ecosistema TI"
                        textArticle="El mundo de las redes tecnológicas, plataformas y servicios digitales, buscan profesionales capaces y competentes. En DESAFÍO LATAM te daremos las directrices para desarrollarte y tener el valor que solicita el mercado TI."
                    /></div>
                <div className="landing-card2-bg">
                    <ArticleLanding
                        svgArticle={slash}
                        imgArticle={card2}
                        titleArticle="Estrategia y Gestión de Búsqueda Laboral."
                        textArticle="Obtén las habilidades necesarias y desarrolla como administrar tu tiempo y recursos en la búsqueda de empleo. Descubre como prepararte para tener una entrevista laboral exitosa."
                    /></div>
                <div className="landing-card3-bg">
                    <ArticleLanding
                        
                        svgArticle={mayorque}
                        imgArticle={card3}
                        titleArticle="Habilidades blandas (soft skills)"
                        textArticle="En el mundo laboral actual, las habilidades blandas (soft skills) son una parte importante en los reclutamientos laborales (se estima que al rededor del 80% de la entrevista laboral consta de la observación de estás habilidades), te invitamos a potenciar tus soft skills para así destacar tu perfil de empleabilidad.
                REGÍSTRATE EN UNUESTRA COMUNIDAD ¡NO LO PIENSES MÁS!"
                    />
                </div>
            </div>
        </>
    )
}
