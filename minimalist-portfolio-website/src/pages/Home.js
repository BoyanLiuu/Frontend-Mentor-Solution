/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledMainPageContainer = styled.div`
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-container {
        display: none;
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
    }
`;
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <StyledMainPageContainer>
            <GlobalStyle />
            <Header />
            <main>
                <div className="hero-container">
                    <div className="hero-img"></div>
                    <div className="hero-text">
                        <h1 className="">
                            Hey, I’m Alex Spencer and I love building beautiful
                            websites
                        </h1>
                        <Link to="/about" className="about-me-btn  link-btn">
                            About Me
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        </StyledMainPageContainer>
    );
}

export default Home;
