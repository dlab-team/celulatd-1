import React from 'react'

import mail1 from '../../../assets/img/mail1.svg';
import calendar from '../../../assets/img/calendar.svg';
import drafts from '../../../assets/img/drafts.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';

import '../../../scss/components/landing/header/_menu.scss';


export default function MenuNav
    () {
    return (
        /*  <div className='menu'>
             <ul className='items'>
                 <li><img src={groups} /></li>
                 <li><img src={drafts}/></li>
                 <li ><img src={mail1}/></li>
                 <li><img src={calendar}/></li>
                 <li><img src={communication}/></li>
             </ul>
         </div> */

        <div className='menu'>
            <ul className='menu-list'>
                <li className="menu-item"><img src={groups} /></li>
                <li className="menu-item"><img src={drafts} /></li>
                <li className="menu-item"><img src={mail1} /></li>
                <li className="menu-item"><img src={calendar} /></li>
                <li className="menu-item"><img src={communication} /></li>
            </ul>
        </div>
    )
}


