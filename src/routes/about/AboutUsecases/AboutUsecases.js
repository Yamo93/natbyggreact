import React, { Component } from 'react';

import AboutUsecasesBox from '../AboutUsecasesBox/AboutUsecasesBox';

import './AboutUsecases.scss';

class AboutUsecases extends Component {
    // Render this dynamically.
    state = {
        usecases: [
            {
            icon: 'far fa-keyboard',
            title: 'Skalbar kod',
            text: 'Vi har alla hört talas om uttrycket "spagettikod". Vi på Nätbygg AB ser till att koden som levereras är utav allra högsta nivå och möjlig att underhålla.'
        },
            {
            icon: 'fas fa-bug',
            title: 'Lösning av buggar',
            text: 'Möjligtvis har du en existerande webbapplikation med en bristande funktionalitet? Våra utvecklare är redo att hoppa in och lösa dina eventuella problem.'
        },
            {
            icon: 'fas fa-filter',
            title: 'Moderna lösningar',
            text: 'För oss på Nätbygg AB är det viktigt att produkterna håller modern standard. Därför arbetar våra utvecklare med de nyaste teknologierna som används idag.'
        },
            {
            icon: 'fas fa-window-restore',
            title: 'Servertjänster',
            text: 'Vi har lång erfarenhet av arbete med relationella såväl som ickerelationella databaser. Vi har en grupp backend-utvecklare som väntar på att hjälpa dig med din applikation!'
        },
            {
            icon: 'far fa-hdd',
            title: 'Smidig FTP-uppladdning',
            text: 'Med vår hjälp slipper du tänka på uppladdningen av din webbplats. Vi sköter allt från att skaffa domän till att lansera sidan på webben.'
        },
            {
            icon: 'fas fa-tasks',
            title: 'Snabba deadlines',
            text: 'Vi är väldigt måna om att våra klienter får sina produkter i tid. Våra arbetare är punktliga och ser till att din deadline uppfylls.'
        }
        ]
    }

    render () {
        return (
            <section className="usecases">
                <h1 className="usecases__title">Nätbygg är för dig om du är ute efter:</h1>
        
                {/* <!-- Grid-elementet --> */}
                <div className="usecases__grid">
                {this.state.usecases.map(usecase => {
                    return <AboutUsecasesBox key={usecase.title} icon={usecase.icon} title={usecase.title} text={usecase.text} />;
                })}
                </div>
            </section>
        );

    }
};

export default AboutUsecases;