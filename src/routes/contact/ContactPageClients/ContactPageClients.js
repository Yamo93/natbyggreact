import React from 'react';

import './ContactPageClients.scss';

const ContactPageClients = (props) => {
    return (
        <div className="love">
        {/* // <!-- Dedikerad sektion för tidigare klienter --> */}
            <h1 className="love__title">Vi <span><i className="fas fa-heart"></i></span> våra kunder</h1>
            <p className="love__desc">Vi har samarbetat med flera utav världens ledande företag:</p>
            <div className="love__brands">
                <i className="fab fa-pinterest love__brands-brand"></i>
                <i className="fab fa-amazon love__brands-brand"></i>
                <i className="fab fa-apple love__brands-brand"></i>
                <i className="fab fa-cc-stripe love__brands-brand"></i>
                <i className="fab fa-ebay love__brands-brand"></i>
            </div>
        </div>
    );
};

export default ContactPageClients;