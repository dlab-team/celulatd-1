import React from 'react';
import '../../scss/components/landing/_card3.scss';

import card3 from '../../assets/img/card3.png';

export default function Card3() {
    return (
        <div className='card-img-3'>
            <div className='img-simbolo'>
                <div className='img'>
                    <img src={card3} />
                </div>
                <div className='simbolo'>
                    {'\>'}
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
