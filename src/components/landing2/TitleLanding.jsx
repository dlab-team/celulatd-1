import React from 'react'

export default function TitleLanding(props) {

    const { titleabove, titlebelow, titleimg } = props;

    return (
        <>
            <div className='titulos'>
                <h2>{titleabove}</h2>
                <h3>{titlebelow}</h3>
            </div>
            <div className='logo-container'>
                <img src={titleimg} />
            </div>
        </>
    )
}
