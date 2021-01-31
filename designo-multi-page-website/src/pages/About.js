/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import { useEffect } from 'react';
import heroMobileImg from '../assets/images/about/mobile/image-about-hero.jpg';
import worldClassTalentMobileImg from '../assets/images/about/mobile/image-world-class-talent.jpg';
import realDealMobileImg from '../assets/images/about/mobile/image-real-deal.jpg';

import heroTabletImg from '../assets/images/about/tablet/image-about-hero.jpg';
import worldClassTalentTabletImg from '../assets/images/about/tablet/image-world-class-talent.jpg';
import realDealTabletImg from '../assets/images/about/tablet/image-real-deal.jpg';

import heroDesktopImg from '../assets/images/about/desktop/image-about-hero.jpg';
import worldClassTalentDesktoImg from '../assets/images/about/desktop/image-world-class-talent.jpg';
import realDealDesktopImg from '../assets/images/about/desktop/image-real-deal.jpg';
import bgPattern from '../assets/images/shared/desktop/bg-pattern-leaf.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationsCards from '../components/LocationCards';

const StyledAboutPageContainer = styled.div`
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .about-banner-container {
        width: 100%;
        height: 71.5rem;
        background-color: var(--peach-color);
    }
    .hero-img {
        width: 100%;
        height: 32rem;
        background-image: url(${heroMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .hero-text-container {
        height: 39.5rem;
    }
    .hero-text {
        width: 32.7rem;
        height: 23.5rem;
        color: white;
        text-align: center;
    }
    .hero-text h1 {
        margin-bottom: 2.4rem;
    }

    .world-class-img {
        width: 100%;
        height: 32rem;
        background-image: url(${worldClassTalentMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .text-container {
        width: 100%;
        height: 54.5rem;
        background-color: var(--extra-light-peach-color);
    }
    .about-container {
        width: 100%;
    }
    .about-text {
        width: 32.7rem;
        height: 38.5rem;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .about-text h1 {
        color: var(--peach-color);
    }
    .about-text p {
        color: var(--dark-grey-color);
    }
    .real-deal-img {
        width: 100%;
        height: 32rem;
        background-image: url(${realDealMobileImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .about-container:nth-last-child(2) {
        margin-bottom: 31rem;
    }

    @media screen and (min-width: 768px) {
        .about-banner-container {
            width: 68.9rem;
            height: 63.2rem;
            margin-bottom: 12rem;
            border-radius: 1.5rem;
        }
        .hero-img {
            background-image: url(${heroTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .hero-text-container {
            justify-content: flex-start;
            margin-top: 6.4rem;
        }
        .hero-text {
            width: 57.3rem;
            height: 18.4rem;
        }
        .hero-text h1,
        .about-text h1 {
            font-size: 4.8rem;

            line-height: 4.8rem;
        }
        .hero-text p,
        .about-text p {
            font-size: 1.6rem;

            line-height: 2.6rem;
        }

        .about-container {
            width: 68.9rem;
            height: 73.6rem;
        }
        .text-container {
            height: 41.6rem;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
        .world-class-img {
            background-image: url(${worldClassTalentTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .real-deal-img {
            background-image: url(${realDealTabletImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
        }
        .about-text {
            width: 57.2rem;
            height: 28rem;
        }

        .about-container:nth-last-child(2) {
            margin-bottom: 38.4rem;
        }
    }

    @media screen and (min-width: 1444px) {
        main {
            background-image: url(${bgPattern}), url(${bgPattern});
            background-repeat: no-repeat;
            background-position: 0 47.5rem, 83rem 177.7rem;
        }
        .about-banner-container {
            display: flex;

            width: 111.1rem;
            height: 48rem;
            margin-bottom: 12rem;
            border-radius: 1.5rem;
        }
        .hero-img {
            width: 47.6rem;
            height: 48rem;
            background-image: url(${heroDesktopImg});
            border-top-left-radius: 0;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
        .hero-text-container {
            width: 63.5rem;
            order: -1;
            margin-top: 13.5rem;
        }
        .hero-text {
            width: 54rem;
            text-align: left;
        }

        .about-container {
            display: flex;
            width: 111.1rem;
            height: 64rem;
        }

        .world-class-img {
            width: 47.6rem;
            height: 64rem;
            background-image: url(${worldClassTalentDesktoImg});
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 1.5rem;
        }
        .text-container {
            width: 63.5rem;
            height: 64rem;
        }
        .about-text {
            width: 44.5rem;
            height: 33.2rem;
            text-align: left;
        }

        .about-container:nth-last-child(2) {
        }

        .real-deal-img {
            order: 1;
            width: 47.6rem;
            height: 64rem;
            background-image: url(${realDealDesktopImg});
            border-top-left-radius: 0;
            border-top-right-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
        }
    }
`;
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <StyledAboutPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <div className="about-banner-container ">
                    <div className="hero-img" />
                    <div className="hero-text-container flex-col-vh-center">
                        <div className="hero-text">
                            <h1 className="phone-hero-text">About Us</h1>
                            <p className="phone-hero-subtext">
                                Founded in 2010, we are a creative agency that
                                produces lasting results for our clients. We’ve
                                partnered with many startups, corporations, and
                                nonprofits alike to craft designs that make real
                                impact. We’re always looking forward to creating
                                brands, products, and digital experiences that
                                connect with our clients’ audiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-container">
                    <div className="world-class-img" />
                    <div className="text-container  flex-col-vh-center">
                        <div className="about-text ">
                            <h1 className="phone-hero-text">
                                World-class talent
                            </h1>
                            <p className="phone-hero-subtext">
                                We are a crew of strategists, problem-solvers,
                                and technologists. Every design is thoughtfully
                                crafted from concept to launch, ensuring success
                                in its given market. We are constantly updating
                                our skills in a myriad of platforms.
                            </p>
                            <p className="phone-hero-subtext">
                                Our team is multi-disciplinary and we are not
                                merely interested in form — content and meaning
                                are just as important. We give great importance
                                to craftsmanship, service, and prompt delivery.
                                Clients have always been impressed with our
                                high-quality outcomes that encapsulates their
                                brand’s story and mission.
                            </p>
                        </div>
                    </div>
                </div>
                <LocationsCards />
                <div className="about-container">
                    <div className="real-deal-img" />
                    <div className="text-container  flex-col-vh-center">
                        <div className="about-text ">
                            <h1 className="phone-hero-text">The real deal</h1>
                            <p className="phone-hero-subtext">
                                As strategic partners in our clients’
                                businesses, we are ready to take on any
                                challenge as our own. Solving real problems
                                require empathy and collaboration, and we strive
                                to bring a fresh perspective to every
                                opportunity. We make design and technology more
                                accessible and give you tools to measure
                                success.
                            </p>
                            <p className="phone-hero-subtext">
                                We are visual storytellers in appealing and
                                captivating ways. By combining business and
                                marketing strategies, we inspire audiences to
                                take action and drive real results.
                            </p>
                        </div>
                    </div>

                    <span className="circle about-world-talent-circle-one"></span>
                    <span className="circle about-world-talent-circle-two"></span>
                </div>

                <Footer />
            </main>
        </StyledAboutPageContainer>
    );
}

export default About;
