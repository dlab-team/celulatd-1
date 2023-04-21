import React from 'react';
import '../../scssWeb/main.css';

export default function TitleLanding(props) {

    const { titleabove, titlebelow, titleimg } = props;

    return (
        <>
            <div className="landing-title">
                <div className='landing-text'>
                <h2>{titleabove}</h2>
                <h3>{titlebelow}</h3>
            </div>
            <div className='landing-logo-container'>
                <img src={titleimg} alt='' />
                </div>
            </div>
        </>
    )
}
