import React from 'react';

import MainTopSec from '../../../views/MainTopSec/MainTopSec';
import AboutUsecases from '../AboutUsecases/AboutUsecases';

import AreaSpace from '../../../views/AreaSpace/AreaSpace';

import ContactBox from '../../../views/ContactBox/ContactBox';
import Footer from '../../../views/Footer/Footer';

const AboutPage = (props) => {
    return (
        <>
            <MainTopSec page="about" />
            <AboutUsecases />
            <AreaSpace page="about" />
            <ContactBox />
            <Footer />
        </>
    );
};

export default AboutPage;