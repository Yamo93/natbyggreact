import React from 'react';

import './Footer.scss';

const Footer = (props) => {
    return (
    <footer className="footer">
        <div className="content">
        <ul className="footer__list">
            <li className="footer__list-item"><a href="./index.html">Våra sponsorer</a></li>
            <li className="footer__list-item"><a href="./index.html">Marknadsföring</a></li>
            <li className="footer__list-item"><a href="./index.html">Vår API</a></li>
            <li className="footer__list-item"><a href="./index.html">Användarpolicy</a></li>
        </ul>
        <ul className="footer__list">
            <li className="footer__list-item"><a href="./index.html">Om oss</a></li>
            <li className="footer__list-item"><a href="./index.html">Vår blogg</a></li>
            <li className="footer__list-item"><a href="./index.html">Kontakt</a></li>
        </ul>
        <div className="social">
            <i className="fab fa-linkedin-in social-icon"></i>
            <i className="fab fa-instagram social-icon"></i>
            <i className="fab fa-twitter social-icon"></i>
        </div>
    </div>
    <p className="footer__copyright">Copyright 2018 &copy; av <a href="mailto:yamo.gebrewold@gmail.com" className="email" title="Mejladress till den ansvarige för sidan">Yamo Gebrewold</a></p>
    </footer>
    );
};

export default Footer;