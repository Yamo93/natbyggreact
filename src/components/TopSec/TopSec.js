import React from 'react';

import './TopSec.scss';
import Logo from '../../img/logga_transparent_blue.png';

const TopSec = (props) => {
    return (
    <section className="top-sec">
    {/* <!-- Navigationsknapp som endast syns i mindre skärmar --> */}
    <label for="hamburger" className="navbar__hamburger-label"><i className="fas fa-bars hamburger"></i></label>
    
    {/* <!-- Ett CSS-knep för att kunna klicka på navigationsknappen --> */}
    <input type="checkbox" id="hamburger" />

        {/* <!-- Navigationsfältet --> */}
        <nav className="navbar">
            <a href="index.html"><img src={Logo} title="Nätbygg AB logga" alt="Nätbygg AB logga" className="navbar__logo" /></a>

            <ul className="navbar__menu">
                <li className="navbar__menu-item"><a href="index.html" className="active">Hem</a></li>
                <li className="navbar__menu-item"><a href="services.html">Våra tjänster</a></li>
                <li className="navbar__menu-item"><a href="about.html">Om oss</a></li>
                <li className="navbar__menu-item"><a href="contact.html">Kontakt</a></li>
            </ul>            
        </nav>

        {/* <!-- Ett element som omfamnar övre delen --> */}
        <div className="wrapper">
            {/* <!-- Den vänstra delen av framsidan --> */}
            <div className="hero">
                <h1 className="hero__title">Vi bygger dina produkter på nätet!</h1>
                <h3 className="hero__desc">Nätbygg AB erbjuder alla sorters av e-tjänster, webbapplikationer och dylikt.</h3>
                {/* <!-- Mejlformulär på framsidan --> */}
                <div className="hero__form">
                    <input type="email" name="email" className="hero__input" placeholder="Din mejladress" />
                    <input type="submit" value="Skicka information" className="hero__submit" />
                </div>
            </div>
            {/* <!-- Den högra delen av framsidan --> */}
            <div className="right-img">
            </div>
        </div>
    </section>
    );
};

export default TopSec;