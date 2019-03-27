import React from 'react';
import Customer from '../../../../img/customer.jpg';

import './QuoteArea.scss';

const QuoteArea = (props) => {
    return (
    <div className="quotes">
        <h2 className="quotes__title">Vad våra kunder säger om oss</h2>
        <img src={Customer} alt="Bild på kund" title="Bild på nöjd kund" className="quotes__img" />
        <blockquote>"Med det enormt skickliga arbetet som Nätbygg AB utförde så lyckades vi etablera en stor webbtjänst som dagligen får massvis med nättrafik. De producerar kvalitetsprodukter på allra högsta nivå! Rekommenderar Nätbygg starkt för alla som planerar att starta ett onlinebaserat företag."</blockquote>
        <cite>Arthur Wilson, VD på Cisco</cite>
    </div>
    );
};

export default QuoteArea;