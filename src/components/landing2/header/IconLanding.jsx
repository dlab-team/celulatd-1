import React from 'react';
import '../../../scssWeb/main.css'

export default function IconLanding(props) {

    const { imgIcon,refLanding } = props;

    return (
        <li>
            <a className='anchor' href={refLanding}>
                <img src={imgIcon} alt='' />
            </a>
        </li>
    );
}