import React from 'react';
import HeaderLanding from './header/HeaderLanding';
import SectionLanding from './section/sectionLanding/SectionLanding';
import SectionCarrusel from './section/sectionCarrusel/SectionCarrusel';
import FooterLanding from './foterlanding/FooterLanding';
import SectionMain from './section/SectionMain';
import TitleLanding from './TitleLanding';
import group from '../../assets/img/groups.svg';
import calendar from '../../assets/img/calendar.svg';
import communication from '../../assets/img/communication.svg';

export default function LandingDlatam() {
    return (
        <div>
            <HeaderLanding />
            <SectionMain />
            <TitleLanding
                titleabove="COMUNIDAD"
                titlebelow="{'\{D\} LATAM_'}"
                titleimg={group}
            />
            <SectionLanding />
            <TitleLanding
                titleabove="EXPERIENCIA"
                titlebelow="ESTUDIANTIL"
                titleimg={communication}
            />
            <SectionCarrusel />
            <TitleLanding
                titleabove="AGENDA"
                titlebelow="ACTIVIDADES"
                titleimg={calendar}
            />
            <SectionCarrusel />
            <FooterLanding />
        </div>
    );
}


