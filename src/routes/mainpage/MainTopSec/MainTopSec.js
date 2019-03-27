import React from 'react';

import './MainTopSec.scss';
import NavBar from '../../../views/NavBar/NavBar';
import FrontHero from '../FrontHero/FrontHero';

const TopSec = (props) => {
    return (
    <section className="top-sec">
    {/* <!-- Navigationsknapp som endast syns i mindre skärmar --> */}
    <label for="hamburger" className="navbar__hamburger-label"><i className="fas fa-bars hamburger"></i></label>
    
    {/* <!-- Ett CSS-knep för att kunna klicka på navigationsknappen --> */}
    <input type="checkbox" id="hamburger" />

        {/* <!-- Navigationsfältet --> */}
        <NavBar />

        {/* <!-- Ett element som omfamnar övre delen --> */}
        <div className="wrapper">
            {/* <!-- Den vänstra delen av framsidan --> */}
            <FrontHero />
            {/* <!-- Den högra delen av framsidan --> */}
            <div className="right-img"></div>
        </div>
    </section>
    );
};

export default TopSec;