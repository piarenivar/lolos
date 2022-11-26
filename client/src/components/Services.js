import React, { useState } from 'react';
import '../index.css';
import './Services.css';
import interiorDetailing from '../images/interior-detailing.png';
import exteriorDetailing from '../images/exterior-detailing.png';
import fullDetailing from '../images/full-detailing.png';
import headlightRestoration from '../images/headlight-restoration.png';
import tireCleaning from '../images/tire-cleaning.png';
import odorEliminator from '../images/odor-eliminator.png';
import steamCleaning from '../images/steam-cleaning.png';
import hairRemoval from '../images/hair-removal.png';

function Services() {
    const [expand, setExpand] = useState(true);
    const handleExpand = () => {
        setExpand(!expand);
    };

    return (
        <div className='container' id='services'>
            <h2 className='services-h2'>Services</h2>
            <div className='services'>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={interiorDetailing} className='card-img' alt='Premium Interior Detailing' /></a>
                    <div className='card-opt'>
                        <p>Premium Interior Detailing</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$40.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={exteriorDetailing} className='card-img' alt='Premium Exterior Detailing' /></a>
                    <div className='card-opt'>
                        <p>Premium Exterior Detailing</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$90.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={fullDetailing} className='card-img' alt='Premium Full Car Detailing' /></a>
                    <div className='card-opt'>
                        <p>Premium Full Car Detailing<i className={expand ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-down rotate'} onClick={handleExpand}></i></p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$120.00</a>
                    </div> 
                    <p className={expand ? 'serv-desc' : ''}><ul><li>Interior Cleaning</li><li>Exterior Wash</li><li>Windows (Ext/Int)</li><li>Tire Cleaning & Shining</li><li>Dashboard/Cup Holders</li><li>Smell Good</li></ul></p>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={tireCleaning} className='card-img' alt='Tire Cleaning & Polish' /></a>
                    <div className='card-opt'>
                        <p>Tire Cleaning & Polish</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$15.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={headlightRestoration} className='card-img' alt='Headlight Restoration' /></a>
                    <div className='card-opt'>
                        <p>Headlight Restoration</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$20.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={odorEliminator} className='card-img' alt='Odor Eliminator' /></a>
                    <div className='card-opt'>
                        <p>Odor Elimination</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$10.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={steamCleaning} className='card-img' alt='Steam Cleaning' /></a>
                    <div className='card-opt'>
                        <p>Steam Cleaning</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$30.00</a>
                    </div>
                </div>
                <div className='service-card'>
                    <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer" className='card-img'><img src={hairRemoval} className='card-img' alt='Pet Hair Removal' /></a>
                    <div className='card-opt'>
                        <p>Pet Hair Removal</p>
                        <a href='https://loloscarwash.youcanbook.me/' target='_blank' rel="noreferrer">$50.00</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;