import React from 'react';

import './AreaSpace.scss';

const AreaSpace = (props) => {
    let classes = ['space'];
    switch (props.page) {
        case "services":
            classes.push('service-space');
            break;
        case "about":
            classes.push('about-space');
        case "contact":
            classes.push('contact-space');
        default: 
            break;
    }
    return (
        <div className={classes.join(' ')}></div>
    );
};

export default AreaSpace;