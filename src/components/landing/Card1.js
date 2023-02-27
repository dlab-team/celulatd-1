import React from 'react';
import '../../scss/components/landing/_card1.scss';

import hombre from '../../assets/img/hombre.png';

export default function Card1() {
  return (
    <div className='card-img-1'>
      <div className='img-simbolo'>
        <div className='simbolo'>
          {'\<'}
        </div>
        <div className='img'>
          <img src={hombre} />
        </div>
      </div>

      <div className='texto'>
        <p>Lorem ipsum dolor sit amet consectetur. Sed odio
          egestas tincidunt mauris mollis senectus tellus
          Condimentum egestas dignissim venenatis magna
          ut at a id placerat. Donec gravida elit velit quisque.</p>
      </div> 
    </div>
  )
}
