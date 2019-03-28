import React from 'react';

import './MainTopSec.scss';
import NavBar from '../../views/NavBar/NavBar';
import FrontHero from '../../routes/mainpage/FrontHero/FrontHero';
import ServicesPageTopArea from '../../routes/services/ServicesPageTopArea/ServicesPageTopArea';
import AboutPageTopArea from '../../routes/about/AboutPageTopArea/AboutPageTopArea';

const TopSec = (props) => {
    let content = null;
    switch (props.page) {
        case "mainpage": 
            content = <FrontHero />;
            break;
        case "services":
            content = <ServicesPageTopArea />;
            break;
        case "about":
            content = <AboutPageTopArea />;
            break;
        default:
            content = <FrontHero />;
            break;
    }

    return (
    <section className="top-sec">
    {/* <!-- Navigationsknapp som endast syns i mindre skärmar --> */}
    <label htmlFor="hamburger" className="navbar__hamburger-label"><i className="fas fa-bars hamburger"></i></label>
    
    {/* <!-- Ett CSS-knep för att kunna klicka på navigationsknappen --> */}
    <input type="checkbox" id="hamburger" />

        {/* <!-- Navigationsfältet --> */}
        <NavBar />

        {content}

    </section>
    );
};

export default TopSec;