import React from 'react';

import './FeaturesArea.scss';

const FeaturesArea = (props) => {
    return (
    <div className="features">
        <h2 className="features__title">Vad vi erbjuder</h2>
        <div className="features__box">
            <div className="features__box-item">
                <i className="fas fa-code icon"></i>
                <h3 className="features__box-item--title">Responsiva sajter</h3>
                <p className="features__box-item--info">Vi utvecklar responsiva webbsidor som fungerar bra på alla möjliga apparater, datorer, surfplattor och mobiltelefoner.</p>
            </div>
            <div className="features__box-item">
                <i className="fas fa-sitemap icon"></i>
                <h3 className="features__box-item--title">Välgenomförda projekt</h3>
                <p className="features__box-item--info">Våra kunder uppskattar enormt vårt arbete och våra skickligheter i att genomföra projekt på bästa möjliga sätt.</p>
            </div>
            <div className="features__box-item">
                <i className="fas fa-folder-open icon"></i>
                <h3 className="features__box-item--title">Uppladdningsservice</h3>
                <p className="features__box-item--info">Vi erbjuder uppladdningstjänst med utrymme på webbhotell samt domän och ser till att din sida är tillgänglig på webben med omedelbar verkan!</p>
            </div>
            <div className="features__box-item">
                <i className="fas fa-terminal icon"></i>
                <h3 className="features__box-item--title">Serverside-tjänster</h3>
                <p className="features__box-item--info">Kanske har du funderat på att starta en webbshop, ett mindre socialt nätverk för arbetsbekanta eller en onlinebaserad skolplattform? Vi ser till att förverkliga dina visioner!</p>
            </div>
        </div>
    </div>
    );
};

export default FeaturesArea;