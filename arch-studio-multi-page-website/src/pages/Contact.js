import React from 'react';
import { ContactHero, ContactDetails, ContactForm } from '../components';

const Contact = () => (
    <div className="page">
        <div className="page__directory">
            <span>Contact</span>
        </div>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
    </div>
)

export default Contact;