import React from 'react';
import IconLanding from './IconLanding';
import mail1 from '../../../assets/img/mail1.svg';
import calendar from '../../../assets/img/calendar.svg';
import drafts from '../../../assets/img/draftsBlanco.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';

export default function NavbarLanding() {
    return (
        <>
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
        </>
    );
}