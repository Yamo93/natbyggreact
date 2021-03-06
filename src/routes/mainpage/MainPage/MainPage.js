import React from 'react';

import MainTopSec from '../../../views/MainTopSec/MainTopSec';
import MainInfoSec from '../MainInfoSec/MainInfoSec';
import ContactBox from '../../../views/ContactBox/ContactBox';
import Footer from '../../../views/Footer/Footer';

const MainPage = (props) => {
    return (
        <>
            <MainTopSec page="mainpage" />
            <MainInfoSec />
            <ContactBox />
            <Footer />
        </>
    );
};

export default MainPage;