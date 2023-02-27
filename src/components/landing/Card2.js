import React from 'react';
import '../../scss/components/landing/_card2.scss';

import card2 from '../../assets/img/card2.png';

export default function Card2() {
  return (
    <div className='card-img-2'>
      <div className='img-simbolo'>
        <div className='simbolo'>
          {'\/'}
        </div>
        <div className='img'>
          <img src={card2} />
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
