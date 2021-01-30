/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import phoneImg from '../assets/images/home/image-hero-phone.png';
import bgHeroImg from '../assets/images/home/desktop/bg-pattern-hero-home.svg';

import Header from '../components/Header';
import DesignView from '../components/DesignView';
import HomeFeature from '../components/HomeFeature';
import Footer from '../components/Footer';

const StyledMainPageContainer = styled.div`
    .hero-container {
        width: 100%;
        height: 84.3rem;
        background-color: var(--peach-color);
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        margin-bottom: 12rem;
        background-image: url(${bgHeroImg});
        background-position: left center;
        background-repeat: no-repeat;
    }
    .hero-text {
        width: 32.7rem;
        height: 31.2rem;
        margin-top: 8rem;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .award-main-text {
        margin-bottom: 1.4rem;
    }
    .learn-more-btn {
        z-index: 1;
        margin-top: 1.9rem;
        color: var(--black-color);
        background-color: white;
    }

    .phone-img-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
    }
    .phone-img-container img {
        margin-top: -11rem;
        height: 91.3rem;
    }
    .desing-view-container {
        height: 79.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 11.9rem;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        .hero-container {
            width: 100%;
            height: 84.3rem;
            padding: 0 5.45rem;
            border-radius: 1.5rem;

            background-position: 17rem center;
        }
        /* .hero-text{
            width:57.3rem;
            height:
        } */
        .award-main-text {
        }
    }
`;
function Home() {
    const designViewData = [
        {
            title: 'web design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'web',
        },
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
        },
        {
            title: 'graphic design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'graphic',
        },
    ];

    const renderList = designViewData.map((item, idx) => {
        return (
            <DesignView
                key={idx}
                title={item.title}
                svgName={item.svgName}
                width={item.width}
                height={item.height}
            />
        );
    });
    return (
        <StyledMainPageContainer>
            <GlobalStyle />
            <Header />
            <main>
                <div className="hero-container">
                    <div className="hero-text">
                        <h1 className="award-main-text phone-hero-text">
                            Award-winning custom designs and digital branding
                            solutions
                        </h1>

                        <h3 className="phone-hero-subtext">
                            With over 10 years in the industry, we are
                            experienced in creating fully responsive websites,
                            app design, and engaging brand experiences. Find out
                            more about our services.
                        </h3>

                        <a href="#" className="learn-more-btn  link-btn">
                            Learn more
                        </a>
                    </div>
                    <div className="phone-img-container">
                        <img src={phoneImg} alt="hero phone" />
                    </div>
                </div>
                <div className="desing-view-container">{renderList}</div>
                <HomeFeature />
                <Footer />
            </main>
        </StyledMainPageContainer>
    );
}

export default Home;
