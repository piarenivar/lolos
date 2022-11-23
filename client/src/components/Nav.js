import React, { useState } from 'react';
import '../index.css';
import './Nav.css';
import logo640x448 from '../images/logo640x448.png';

function Nav() {
    const [slide, setSlide] = useState(true);
    const handleSlide = () => {
        setSlide(!slide);
    };

    return (
        <nav className='nav'>
            <div className='container navbar'>
                <a href='/'><img src={logo640x448} alt='Lolos Car Wash Logo' className='nav-logo' /></a>
                <div className={`nav-links ${slide ? 'slide' : ''}`}>
                    <a href='#coupon-slider' className='nav-link nav-underline'>Services</a>
                    <a href='#lolos' className='nav-link nav-underline'>Why Lolo's</a>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='nav-link nav-sched'>Schedule</a>
                </div>
                <div className='hamburger' onClick={handleSlide}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
