import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/logga_transparent_blue.png';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <nav className="navbar">
        {/* <!-- Navigationsfältet --> */}
            <a href="index.html"><img src={Logo} title="Nätbygg AB logga" alt="Nätbygg AB logga" className="navbar__logo" /></a>

            <ul className="navbar__menu">
                <li className="navbar__menu-item"><NavLink to="/" exact>Hem</NavLink></li>
                <li className="navbar__menu-item"><NavLink to="/services">Våra tjänster</NavLink></li>
                <li className="navbar__menu-item"><NavLink to="/about">Om oss</NavLink></li>
                <li className="navbar__menu-item"><NavLink to="/contact">Kontakt</NavLink></li>
            </ul>            
        </nav>
    );
};

export default NavBar;