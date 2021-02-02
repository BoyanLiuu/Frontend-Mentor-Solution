/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledContactPageContainer = styled.div`
    @media screen and (min-width: 768px) {
        main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media screen and (min-width: 1440px) {
    }
`;
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <StyledContactPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <div className="contact-us-container  flex-col-vh-center"></div>

                <Footer />
            </main>
        </StyledContactPageContainer>
    );
}

export default Contact;
