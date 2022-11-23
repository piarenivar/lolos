import React from 'react';
import '../index.css';
import './Lolos.css';

function Lolos() {
    return (
        <div id='lolos'>
            <h2>Why Lolo's?</h2>
            <div className='why-container'>
                <div className='why why-prem'>
                    <h3>Premium Cleaning</h3>
                    <p>We offer complete interior & exterior detailing services with premium add-ons to ensure your vehicle looks it's best anywhere you go.</p>
                </div>
                <div className='why why-mobile'>
                    <h3>Mobile Service</h3>
                    <p>Busy schedules, traffic, long lines - there's a million reasons to not wash your car. Let us come to you, and give your car the proper cleaning it deserves.</p>
                </div>
                <div className='why why-speed'>
                    <h3>Speed</h3>
                    <p>We've optimatized our cleaning process without sacrificing quality so you can get going to where you need to be.</p>
                </div>
                <div className='why why-affor'>
                    <h3>Save Money</h3>
                    <p>Our core philosophy is to ensure we provide our best services at the best possible rates. Don't overspend & choose Lolo's Car Wash.</p>
                </div>
                <div className='why why-conf'>
                    <h3>Confidence</h3>
                    <p>We are passionate about cars - from the way they sound to the way they look. You can rest assured we will take care of your car like our own.</p>
                </div>
            </div>
        </div>
    );
}
export default Lolos;