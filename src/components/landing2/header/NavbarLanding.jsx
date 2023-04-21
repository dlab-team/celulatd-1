import React from 'react';
import IconLanding from './IconLanding';
import mail1 from '../../../assets/img/landing_mail_W.svg';
import calendar from '../../../assets/img/landing_calendar_W.svg';
import drafts from '../../../assets/img//landing_experience_W.svg';
import groups from '../../../assets/img/landing_groups_W.svg';
import communication from '../../../assets/img/landing_feed_W.svg';
import '../../../scssWeb/main.css'

export default function NavbarLanding() {
    return (
        <>
            <div className="landing-header-navbar">
            <ul>
                <IconLanding
                    refLanding='#refenrenciaLanding'
                    imgIcon={mail1}
                />
                <IconLanding
                    refLanding='#refenrenciaLanding'
                    imgIcon={calendar}
                />
                <IconLanding
                    refLanding='#refenrenciaLanding'
                    imgIcon={drafts}
                />
                <IconLanding
                    refLanding='#refenrenciaLanding'
                    imgIcon={groups}
                />
                <IconLanding
                    refLanding='#refenrenciaLanding'
                    imgIcon={communication}
                />
                </ul>
            </div>
        </>
    );
}