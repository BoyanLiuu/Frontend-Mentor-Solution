import React, { useEffect } from 'react';
import { SideHero, ContactDetails, ContactForm } from '../components';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const heading = 'Contact';
    const subheading = ' Tell us about your project';
    const content =
        'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!';
    return (
        <main className="slideY">
            <div id="location-design">
                <span></span>
                <span>Contact</span>
            </div>

            <SideHero
                heading={heading}
                subheading={subheading}
                content={content}
            />
            <ContactDetails />
            <ContactForm />
        </main>
    );
};

export default Contact;
