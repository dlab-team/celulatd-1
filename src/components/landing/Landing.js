import React from 'react';
import '../../scss/layout/_landing.scss';

import Background from './Background';
import InputHero from '../common/Input';
import Button from '../common/Button';
import Titles from './Titles';
import Logo from './Logo';
import MenuNav from './MenuNav';
import BackgroundCallToAction from './Background-call-to-action';
import CallToAction from './CallToAction';
import Bgcomunidad from './Bgcomunidad';
import Comunidad from './Comunidad';
import BgCard1 from './BgCard1';
import Card1 from './Card1';
import BgCard2 from './BgCard2';
import Card2 from './Card2';
import BgCard3 from './BgCard3';
import Card3 from './Card3';


import BgExperiencia from './BgExperiencia';
import Experiencia from './Experiencia';

import BgActividades from './BgActividades';
import Actividades from './Actividades';








import Footer from './Footer';



export default function Landing() {
    return (

        <>
            <div class="container">
                <div class="background-hero"><Background /></div>
                <div class="imput-hero"><InputHero /></div>
                <div class="logo-hero"> <Logo />  </div>
                <div class="title-hero"><Titles /></div>
                <div class="btn-hero"> <Button /></div>
                <div class="menu-hero"><MenuNav /></div>
                <div class="background-call-to-action"><BackgroundCallToAction /></div>
                <div class="call-to-action"><CallToAction /> </div>
                <div class="background-comunidad"><Bgcomunidad /></div>
                <div class="comunidad"><Comunidad /></div>
                <div class="background-card1"><BgCard1 /></div>
                <div class="card1"><Card1/></div>
                <div class="background-card2"><BgCard2 /></div>
                <div class="card2"><Card2/></div>
                <div class="background-card3"><BgCard3 /></div>
                <div class="card3"><Card3/></div>
                <div class="background-experiencia"><BgExperiencia/></div>
                <div class="experiencia"><Experiencia/></div>
                <div class="background-carousel1"></div>
                <div class="carousel1"></div>
                <div class="background-actividades"><BgActividades/></div>
                <div class="actividades"><Actividades/></div>
                <div class="background-carousel2"></div>
                <div class="carousel2"></div>
                <div class="background-footer"></div>
                <div class="footer"><Footer /></div>
            </div>

            {/* <div className="container-landing">
                <div class="imput-nav"> <InputHero/></div>
                <div class="logo-nav"> <Logo/></div>
                <div class="titulos-nav"><Titles/></div>
                <div className="btn-nav"><Button/></div>
                <div class="menu-nav"></div>
                <div class="call-to-action"></div>
                <div class="comunidad"></div>
                <div class="card-simbol-1"></div>
                <div class="card-text-1"></div>
                <div class="card-img-1"> <CardImg1/>  </div>
                <div class="card-simbol-2"></div>
                <div class="card-text-2"></div>
                <div class="card-img-2"></div>
                <div class="card-img-3"></div>
                <div class="card-text-3"></div>
                <div class="card-simbol-3"></div>
                <div class="experiencia-estudiantil"></div>
                <div class="carousel-testimonios"></div>
                <div class="agenda-actividades"></div>
                <div class="carousel-actividades"></div>
                <div class="footer"></div>
                <div className='hero'><Background/></div>
            </div> */}



        </>



    )
}