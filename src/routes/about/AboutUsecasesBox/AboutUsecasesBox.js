import React from 'react';

import './AboutUsecasesBox.scss';

const AboutUsecasesBox = (props) => {
    let classes = ["usecases__grid-box--icon"];
    classes.push(props.icon);
    return (
    <div className="usecases__grid-box">
        <i className={classes.join(' ')}></i>
        <div className="usecases__grid-box-text">
            <h3 className="usecases__grid-box-text--title">{props.title}</h3>
            <p className="usecases__grid-box-text--info">{props.text}</p>
        </div>
    </div>
    );
};

export default AboutUsecasesBox;