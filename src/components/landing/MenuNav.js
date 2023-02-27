import React from 'react'


import { FaFacebookF,FaTwitter,FaInstagram, } from 'react-icons/fa';



import '../../scss/components/landing/_menu.scss';


export default function MenuNav
    () {
    return (
        <div>
            <ul className='items'>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
            </ul>
        </div>
    )
}


