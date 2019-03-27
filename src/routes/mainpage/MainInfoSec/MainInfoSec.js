import React from 'react';

import FeaturesArea from './FeaturesArea/FeaturesArea';
import TechArea from './TechArea/TechArea';
import QuoteArea from './QuoteArea/QuoteArea';

import './MainInfoSec.scss';

const MainInfoSec = (props) => {
    return (
        <section className="info-sec">
        <FeaturesArea />

        {/* <!-- Tekniksektionen --> */}
        <TechArea />
        {/* <!-- Citat från en kund --> */}
        <QuoteArea />
    </section>
    );
};

export default MainInfoSec;