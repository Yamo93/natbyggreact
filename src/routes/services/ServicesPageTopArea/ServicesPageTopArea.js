import React from 'react';

import './ServicesPageTopArea.scss';

const ServicesPageTopArea = (props) => {
    return (
        <div className="services">
        {/* <!-- Övre delen --> */}
        <div className="topserv">
            {/* <!-- Vänstra delen av servicesektionen --> */}
            <div className="topserv-left">
                <h1 className="topserv-left--title">Vår teknologi</h1>
            </div>
            {/* <!-- Högra delen av servicesektionen --> */}
            <div className="topserv-right">
                <h3 className="topserv-right--title">Nätbygg AB försöker alltid hänga med i branschens hetaste trender. Vi använder de mest moderna webbutvecklingsteknikerna!</h3>
                <p className="topserv-right--info">Nätbygg AB har utvecklat massvis med webbapplikationer och använt en rad olika tekniker genom åren - allt från PHP och C# med ASP.NET på backend till MEAN-stacken. Våra utvecklare är väldigt entusiastiska och passionerade och är alltid uppdaterade om de senaste trenderna i industrin. De är flexibla och kan använda de flesta klientbaserade samt serverorienterade språken och ramverken. Vi uppfyller dina önskemål!</p>
                <a href="./services.html" className="topserv-right--link">Läs mer &rarr;</a>
            </div>
        </div>

        {/* <!-- Undre delen --> */}
        <div className="bottomserv">
            <div className="bottomserv__box">
                <i className="fas fa-upload serv-icon"></i>
                <h3 className="bottomserv__box-title">Hostingservice</h3>
                <p className="bottomserv__box-info">Kanske har du haft en jobbig tid och försökt klura ut hur du ska ladda upp din sida och generera trafik till din webbplats? Genom att låta oss på Nätbygg AB sköta det åt dig så kan du fokusera på dina företagsidéer. Vi sköter allt det åt dig på Nätbygg AB!</p>
            </div>
            <div className="bottomserv__box">
                <i className="fas fa-desktop serv-icon"></i>
                <h3 className="bottomserv__box-title">Teknisk support</h3>
                <p className="bottomserv__box-info">Om du utav någon anledning skulle behöva ändra din webbapplikation, lägga till funktionalitet, eller helt enkelt fråga om teknisk hjälp så finns våra arbetare tillgängliga för att hjälpa kunderna! Supporten är tillgänglig dagligen mellan 9-18.</p>
            </div>
            <div className="bottomserv__box">
                <i className="far fa-file-code serv-icon"></i>
                <h3 className="bottomserv__box-title">Underhållning av kod</h3>
                <p className="bottomserv__box-info">Vi tror på hållbar och skalbar kod. Därför har vi lagt kravet på våra utvecklare att skriva så pass ren kod som möjligt. Vi uppdaterar teknikerna ständigt och är beredda på att migrera din stack till en nyare sådan vid önskan.</p>
            </div>
        </div>
    </div>
    );
};

export default ServicesPageTopArea;