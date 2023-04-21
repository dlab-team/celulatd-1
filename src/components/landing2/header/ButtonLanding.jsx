import React from 'react'
import { Link } from 'react-router-dom';
import '../../../scssWeb/main.css';


export default function ButtonLanding() {
    return (
        <div className='landing-container-btn'>
            <Link to="/login" className='link'>
                <button className='btn'>
                    <p> {'ENTRAR'}</p>
                </button>
            </Link>
        </div>
    )
}