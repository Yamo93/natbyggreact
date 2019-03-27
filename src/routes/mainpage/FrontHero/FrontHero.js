import React from 'react';
import './FrontHero.scss';

const FrontHero = (props) => {
    return (
        <div className="hero">
        {/* <!-- Den vänstra delen av framsidan --> */}
            <h1 className="hero__title">Vi bygger dina produkter på nätet!</h1>
            <h3 className="hero__desc">Nätbygg AB erbjuder alla sorters av e-tjänster, webbapplikationer och dylikt.</h3>
            {/* <!-- Mejlformulär på framsidan --> */}
            <div className="hero__form">
                <input type="email" name="email" className="hero__input" placeholder="Din mejladress" />
                <input type="submit" value="Skicka information" className="hero__submit" />
            </div>
        </div>
    );
};

export default FrontHero;