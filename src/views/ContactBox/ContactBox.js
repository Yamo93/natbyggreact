import React from 'react';

import './ContactBox.scss';

const ContactBox = (props) => {
    return (
        <div className="contactbox">
        {/* <!-- Kontaktboxen som är kopplad till sidfoten --> */}
            <h1 className="contactbox__title">Kontakta oss nu</h1>
            <p className="contactbox__info">Tiden är inne för dig att förverkliga dina visioner! Tveka inte på att kontakta oss. Vi väntar på ditt mejl!</p>
            <a href="mailto:yamo.gebrewold@gmail.com" className="contactbox__link">Mejla oss</a>
        </div>
    );
};

export default ContactBox;