import React from 'react';

import './ContactForm.scss';

const ContactForm = (props) => {
    return (
        <div className="contact">
            <h1 className="contact__title">Kontakta oss</h1>
            <p className="contact__desc">För synpunkter, önskemål eller ytterligare information vänligen kontakta oss genom att fylla i nedanstående formulär:</p>

            {/* <!-- Kontaktformulär --> */}
            <form className="contact__form">
                <label htmlFor="name" className="contact__form-namelab">Namn:</label>
                <input type="text" id="name" className="contact__form-nameinput" placeholder="Skriv ditt namn här..." />
                <label htmlFor="email" className="contact__form-maillab">Mejl:</label>
                <input type="email" id="email" className="contact__form-mailinput" placeholder="Vänligen ange mejladress..." />
                <label htmlFor="message" className="contact__form-msglab">Meddelande:</label>
                <input type="text" id="message" className="contact__form-msginput" placeholder="Vad har du för önskemål?" />
                <input type="submit" value="Skicka" className="contact__form-submit" />
            </form>
        </div>
    );
};

export default ContactForm;