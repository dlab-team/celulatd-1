import React from 'react';

export default function IconLanding(props) {

    const { imgIcon,refLanding } = props;

    return (
        <li className="menu-item">
            <a className='anchor' href={refLanding}>
                <img src={imgIcon} />
            </a>
        </li>
    );
}