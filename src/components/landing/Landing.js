import React from 'react';
import '../../scss/layout/_landing.scss';

import Background from '../landing/header/Background';
import InputHero from '../landing/header/Input';
import Button from '../landing/header/Button';
import Titles from '../landing/header/Titles';
import Logo from '../landing/header/Logo';
import MenuNav from '../landing/header/MenuNav';

import BackgroundCallToAction from '../landing/body/Background-call-to-action';
import CallToAction from '../landing/body/CallToAction';
import Bgcomunidad from '../landing/body/Bgcomunidad';
import Comunidad from '../landing/body/Comunidad';
import ImgCard1 from './body/ImgCard1';
import SvgCard1 from './body/SvgCard1';
import BgCard1 from './body/BgCard1';
import TextCard1 from './body/TextCard1';
import ImgCard2 from './body/ImgCard2';
import SvgCard2 from './body/SvgCard2';
import BgCard2 from './body/BgCard2';
import TextCard2 from './body/TextCard2';
import ImgCard3 from './body/ImgCard3';
import SvgCard3 from './body/SvgCard3';
import BgCard3 from './body/BgCard3';
import TextCard3 from './body/TextCard3';
import BgExperiencia from '../landing/body/BgExperiencia';
import Experiencia from '../landing/body/Experiencia';
import CarruselStories from '../landing/body/CarruselStories';
import BgActividades from '../landing/body/BgActividades';
import Actividades from '../landing/body/Actividades';
import CarruselCalendario from '../landing/body/CarruselCalendario';


import Footer from '../landing/footer/Footer';








export default function Landing() {
    return (

        <>
            <div class="container">
                <div class="header"></div>

                <div class="bg-hero"><Background /></div>
                <div class="imput-hero"><InputHero /></div>
                <div  class="btn-hero"><Button/></div>
                <div class="titles-hero"><Titles/></div>
                <div class="logo-hero"><Logo/></div>
                <div class="menu-nav"><MenuNav/></div>
                
                
                
                <div class="body"></div>
                <div class="bg-call-to-action"><BackgroundCallToAction/></div>
                <div class="call-to-action"><CallToAction/></div>
                <div class="bg-comunidad"><Bgcomunidad/></div>
                <div class="comunidad"><Comunidad/></div>
                <div class="bg-card1"><BgCard1 /></div>
                <div class="svg-card1"><SvgCard1 /></div>
                <div class="img-card1"><ImgCard1 /></div>
                <div class="text-card1"><TextCard1 /></div>
                <div class="bg-card2"><BgCard2 /></div>
                <div class="svg-card2"><SvgCard2 /></div>
                <div class="img-card2"><ImgCard2 /></div>
                <div class="text-card2"><TextCard2 /></div>
                <div class="bg-card3"><BgCard3 /></div>
                <div class="svg-card3"><SvgCard3 /></div>
                <div class="img-card3"><ImgCard3 /></div>
                <div class="text-card3"><TextCard3 /></div>
                <div class="bg-experiencia"><BgExperiencia/></div>
                <div class="experiencia"><Experiencia/></div>
                <div class="bg-carousel1"></div>
                <div class="carousel1"><CarruselStories/></div>
                <div class="bg-agenda"><BgActividades/></div>
                <div class="agenda"><Actividades/></div>
                <div class="bg-carousel2"></div>
                <div class="carousel2"><CarruselCalendario/></div>
                
                
                <div class="footer"></div>
                <div class="bg-footer"></div>
                <div class="footer-content"><Footer/></div>
            </div>



            {/* <div class="container">
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
                <div class="card1"><Card1 /></div>
                <div class="background-card2"><BgCard2 /></div>
                <div class="card2"><Card2 /></div>
                <div class="background-card3"><BgCard3 /></div>
                <div class="card3"><Card3 /></div>
                <div class="background-experiencia"><BgExperiencia /></div>
                <div class="experiencia"><Experiencia /></div>
                <div class="background-carousel1"></div>
                <div class="carousel1"><CarruselStories /></div>
                <div class="background-actividades"><BgActividades /></div>
                <div class="actividades"><Actividades /></div>
                <div class="background-carousel2"></div>
                <div class="carousel2"><CarruselCalendario /></div>
                <div class="background-footer"></div>
                <div class="footer"><Footer /></div>
            </div> */}
        </>



    )
}