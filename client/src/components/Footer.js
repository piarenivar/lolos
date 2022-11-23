import React from 'react';
import '../index.css';
import './Footer.css';
import logo640x448 from '../images/logo640x448.png';

function Footer() {
    return (
        <div className='container' id='footer'>
            <div className='footer-left'>
                <a href='/'><img src={logo640x448} alt='Lolos Car Wash Logo' className='footer-logo' /></a>
            </div>
            <div className='footer-middle'>
                <h4>Company Info</h4>
                <hr />
                <a href='tel:817-790-4672'>(817) 790-4672</a>
                <a href='mailto:contact@loloscarwash.com' target='_blank' rel="noreferrer">contact@loloscarwash.com</a>
                <a href='/'>www.loloscarwash.com</a>
            </div>
            <a href='https://piarenivar.github.io/' target='_blank' className='pablo' rel="noreferrer">Developed by Pablo Arenivar</a>
        </div>
    );
}

export default Footer;
