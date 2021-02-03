/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

// main {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <GlobalStyle />
            <main>
                <Header />
                <div className="contact-us-container"></div>

                <Footer />
            </main>
        </div>
    );
}

export default Contact;
