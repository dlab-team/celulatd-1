import React from 'react';
import InputLading from './ImputLanding';
import LogoLandin from './LogoLanding';
import ButtonLanding from './ButtonLanding';
import NavbarLanding from './NavbarLanding';

export default function HeaderLanding() {
    return (
        <>
            <LogoLandin />
            <InputLading />
            <ButtonLanding />
            <NavbarLanding />
        </>
    );
}