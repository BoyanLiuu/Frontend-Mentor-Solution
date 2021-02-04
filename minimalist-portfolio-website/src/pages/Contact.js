import React, { useEffect } from 'react';
import SocialIcons from '../components/SocialIcons';
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="contact-contaier">
            <div className="contact-contaier__get-in-touch">
                <h1>Get in Touch</h1>
                <p>
                    I’d love to hear about what you’re working on and how I
                    could help. I’m currently looking for a new role and am open
                    to a wide range of opportunities. My preference would be to
                    find a position in a company in London. But I’m also happy
                    to hear about opportunites that don’t fit that description.
                    I’m a hard-working and positive person who will always
                    approach each task with a sense of purpose and attention to
                    detail. Please do feel free to check out my online profiles
                    below and get in touch using the form.
                </p>
                <SocialIcons />
            </div>

            <div className="contact-contaier__form">
                <h1> Contact Me</h1>
            </div>
        </div>
    );
}

export default Contact;
