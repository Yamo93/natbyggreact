import React from 'react';

import './MainTopSec.scss';
import NavBar from '../../views/NavBar/NavBar';
import FrontHero from '../../routes/mainpage/FrontHero/FrontHero';
import ServicesPageTopArea from '../../routes/services/ServicesPageTopArea/ServicesPageTopArea';
import AboutPageTopArea from '../../routes/about/AboutPageTopArea/AboutPageTopArea';
import ContactForm from '../../routes/contact/ContactForm/ContactForm';

const TopSec = (props) => {
    let content = null;
    let classes = ['top-sec']; 
    switch (props.page) {
        case "mainpage": 
            content = <FrontHero />;
            break;
        case "services":
            content = <ServicesPageTopArea />;
            break;
        case "about":
            content = <AboutPageTopArea />;
            classes.push('special-top-sec');
            break;
        case "contact":
            content = <ContactForm />;
            break;
        default:
            content = <FrontHero />;
            break;
    }

    return (
    <section className={classes.join(' ')}>
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