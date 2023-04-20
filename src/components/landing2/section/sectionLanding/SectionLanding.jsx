import React from 'react'
import ArticleLanding from './ArticleLanding';
import card1 from '../../../../assets/img/card1.png';
import card2 from '../../../../assets/img/card2.png';
import card3 from '../../../../assets/img/card3.png';
import menorque from '../../../../assets/img/_Menor.svg';
import slash from '../../../../assets/img/Slash.svg';
import mayorque from '../../../../assets/img/_Mayor.svg';

export default function SectionLanding() {
    return (
        <>
            <ArticleLanding
                svgAricle={menorque}
                imgAricle={card1}
                textAricle="texto de el articulo, favor cambiar"
            />
            <ArticleLanding
                svgAricle={slash}
                imgAricle={card2}
                textAricle="texto de el articulo, favor cambiar"
            />
            <ArticleLanding
                svgAricle={mayorque}
                imgAricle={card3}
                textAricle="texto de el articulo, favor cambiar"
            />
        </>
    )
}
