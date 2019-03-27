import React from 'react';

import './TechArea.scss';

const TechArea = (props) => {
    return (
    <div className="technologies">
        <h2 className="technologies__title">Tekniker som vi använder</h2>
        <div className="icon-box">
            <div className="icon">
                <h3 className="icon--title">Avancerad CSS3</h3>
                <i className="fab fa-css3-alt code-icon"></i>
            </div>
            <div className="icon">
                <h3 className="icon--title">Modern JavaScript</h3>
                <i className="fab fa-js code-icon"></i>
            </div>
            <div className="icon">
                <h3 className="icon--title">PHP på back-end</h3>
                <i className="fab fa-php code-icon"></i>
            </div>
            <div className="icon">
                <h3 className="icon--title">React med Redux</h3>
                <i className="fab fa-react code-icon"></i>
            </div>
        </div>
    </div>
    );
};

export default TechArea;