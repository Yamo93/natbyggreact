import React from 'react';

import AboutWorkerBox from '../AboutWorkerBox/AboutWorkerBox';

import './AboutPageTopArea.scss';

const AboutPageTopArea = (props) => {
    return (
        <div className="about">
        <h1 className="about__title">Om oss</h1>
        <p className="about__info">Vi är en grupp utvecklare, projektledare och designers som samarbetar för att bygga nya, spännande webbsidor och applikationer.</p>

        {/* <!-- Sektion som innehåller personliga korten --> */}
        <div className="about__wrapper">
            <AboutWorkerBox img="two" fullname="Ricky Snyder" profession="Fullstack-utvecklare" description="Ricky har arbetat med webbutveckling sedan slutet av 90-talet. Han är erfaren i alla möjliga språk och ramverk. Han har tidigare jobbat för stora företag i världen som IBM och Yahoo och tagit med sig erfarenheten till vårt företag. Ricky är expert inom C# och ASP.NET, men är också bekväm med ramverk som React.JS och Vue." />
            <AboutWorkerBox img="one" fullname="Dora Stone" profession="Projektledare" description="Dora har lanserat flera stora projekt på en global nivå. Hon har arbetat världskända klienter i olika branscher. Med sitt djupt strategiska tänkande är hon en expert på att starta igång viktiga projekt och synka ihop ett välarbetande team och förvandla drömmar och visioner till en verklighet. Dora är väldigt social och duktig på att kommunicera med sina klienter." />
            <AboutWorkerBox img="three" fullname="Isaac Gilbert" profession="Frontend-expert" description="Isaac har specialiserat sig inom frontend-teknik sedan många år tillbaka. Med sin enorma passion för frontend så har han producerat kvalitetsprodukter för flera utav världens IT-jättar som Facebook och Amazon. JavaScript är hans bekväma sida, och han är väldigt bekant med moderna utvecklingsverktyg som Webpack, NPM och annat." />
        </div>
    </div>
    );
};

export default AboutPageTopArea;