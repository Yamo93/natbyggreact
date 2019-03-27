import React from 'react';

import Logo from '../../img/logga_transparent_blue.png';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <nav className="navbar">
        {/* <!-- Navigationsfältet --> */}
            <a href="index.html"><img src={Logo} title="Nätbygg AB logga" alt="Nätbygg AB logga" className="navbar__logo" /></a>

            <ul className="navbar__menu">
                <li className="navbar__menu-item"><a href="index.html" className="active">Hem</a></li>
                <li className="navbar__menu-item"><a href="services.html">Våra tjänster</a></li>
                <li className="navbar__menu-item"><a href="about.html">Om oss</a></li>
                <li className="navbar__menu-item"><a href="contact.html">Kontakt</a></li>
            </ul>            
        </nav>
    );
};

export default NavBar;