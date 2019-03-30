import React from 'react';

import MainTopSec from '../../../views/MainTopSec/MainTopSec';

import ContactPageClients from '../ContactPageClients/ContactPageClients';

import AreaSpace from '../../../views/AreaSpace/AreaSpace';

import ContactBox from '../../../views/ContactBox/ContactBox';
import Footer from '../../../views/Footer/Footer';

const AboutPage = (props) => {
    return (
        <>
            <MainTopSec page="contact" />
            <ContactPageClients />

            <AreaSpace page="contact" />
            <ContactBox />
            <Footer />
        </>
    );
};

export default AboutPage;