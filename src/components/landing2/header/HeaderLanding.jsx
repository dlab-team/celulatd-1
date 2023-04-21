import React from 'react';

import LogoLanding from './LogoLanding';
import ButtonLanding from './ButtonLanding';
import NavbarLanding from './NavbarLanding';
import '../../../scssWeb/main.css'

export default function HeaderLanding() {
    return (
        <>
            <div className="landing-header-container">
                <div className="landing-header-middle">
                    <LogoLanding />
                    <ButtonLanding />
                </div>
                
                    <NavbarLanding />
            
            </div>
        </>
    );
}