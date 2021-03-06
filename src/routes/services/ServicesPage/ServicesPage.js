import React from 'react';

import MainTopSec from '../../../views/MainTopSec/MainTopSec';

import ContactBox from '../../../views/ContactBox/ContactBox';
import Footer from '../../../views/Footer/Footer';

import AreaSpace from '../../../views/AreaSpace/AreaSpace';

const ServicesPage = (props) => {
    return (
        <>
            <MainTopSec page="services" />
            <AreaSpace page="services" />
            <ContactBox />
            <Footer />
        </>
    );
};

export default ServicesPage;