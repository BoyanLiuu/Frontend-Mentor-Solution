/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';

import heroMobileImg from '../assets/images/about/mobile/image-about-hero.jpg';
import worldClassTalentMobileImg from '../assets/images/about/mobile/image-world-class-talent.jpg';
import realDealMobileImg from '../assets/images/about/mobile/image-real-deal.jpg';

import heroTabletImg from '../assets/images/about/tablet/image-about-hero.jpg';
import worldClassTalentTabletImg from '../assets/images/about/tablet/image-world-class-talent.jpg';
import realDealTabletImg from '../assets/images/about/tablet/image-real-deal.jpg';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationsCards from '../components/LocationCards';

const StyledAboutPageContainer = styled.div`
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
    .about-text {
        width: 32.7rem;
        height: 38.5rem;
        display: flex;
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
`;
function About() {
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

                    <span className="circle about-world-talent-circle-one"></span>
                    <span className="circle about-world-talent-circle-two"></span>
                    <span className="circle about-world-talent-circle-three"></span>
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
