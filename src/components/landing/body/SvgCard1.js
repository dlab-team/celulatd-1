import React from 'react';

import '../../../scss/components/landing/body/_svgCard1.scss';
import menorque from '../../../../src/assets/img/_Menor.svg'

export default function SvgCard1() {
  return (
    <div>
        <div className='svg-card1'>
        <img src={menorque}/>
        </div>
    </div>
  )
}
