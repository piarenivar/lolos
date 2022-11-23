import React from 'react';
import '../index.css';
import './Services.css';
import interiorDetailing from '../images/interior-detailing.png';
import exteriorDetailing from '../images/exterior-detailing.png';
import fullDetailing from '../images/full-detailing.png';
import headlightRestoration from '../images/headlight-restoration.png';
import tireCleaning from '../images/tire-cleaning.png';
import odorEliminator from '../images/odor-eliminator.png';

function Services() {
    return (
        <div className='container' id='services'>
            <h2 className='services-h2'>Services</h2>
            <div className='services'>
                <div className='service-card'>
                    <img src={interiorDetailing} className='card-img' alt='Premium Interior Detailing' />
                    <div className='card-opt'>
                        <p>Premium Interior Detailing</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$40.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <img src={exteriorDetailing} className='card-img' alt='Premium Exterior Detailing' />
                    <div className='card-opt'>
                        <p>Premium Exterior Detailing</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$90.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <img src={fullDetailing} className='card-img' alt='Premium Full Car Detailing' />
                    <div className='card-opt'>
                        <p>Premium Full Car Detailing</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$120.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <img src={tireCleaning} className='card-img' alt='Tire Cleaning & Polish' />
                    <div className='card-opt'>
                        <p>Tire Cleaning & Polish</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$15.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <img src={headlightRestoration} className='card-img' alt='Headlight Restoration' />
                    <div className='card-opt'>
                        <p>Headlight Restoration</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$20.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <img src={odorEliminator} className='card-img' alt='Odor Eliminator' />
                    <div className='card-opt'>
                        <p>Odor Elimination</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$10.00</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;