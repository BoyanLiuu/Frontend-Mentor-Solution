/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import icon from '../assets/images/logo-light.png';
import facebookLogo from '../assets/images/shared/icon-facebook.svg';
import instagramLogo from '../assets/images/shared/icon-instagram.svg';
import pinterestLogo from '../assets/images/shared/icon-pinterest.svg';
import twitterLogo from '../assets/images/shared/icon-twitter.svg';
import youtubeLogo from '../assets/images/shared/icon-youtube.svg';

const FooterContainer = styled.footer`
    width: 100%;
    height: 81.5rem;
    background-color: var(--black-color);
    display: flex;
    justify-content: center;
    position: relative;
    .inner-div {
        margin-top: 25.3rem;
        width: 100%;
        height: 49.8rem;
        padding: 0 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        width: 20.1rem;
        height: 2.8rem;
        margin-bottom: 2.8rem;
    }
    .links {
        padding-top: 3.2rem;
        height: 13.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .link {
        list-style: none;
        transition: border 0.7s ease;
    }
    .link:hover {
        border-bottom: 1px solid white;
    }
    .link a {
        font-size: 1.4rem;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
    }
    .footer-detail-info {
        color: white;
        opacity: 0.5;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        text-align: center;
        margin-bottom: 4rem;
    }
    .footer-detail-info p:first-of-type {
        font-weight: 700;
    }
    .social-icon {
        cursor: pointer;
    }
    .social-icon-container {
        display: flex;
        justify-content: space-between;
    }
`;
const TallAboutContainer = styled.div`
    position: absolute;
    width: 32.7rem;
    height: 37.9rem;
    background-color: var(--peach-color);
    border-radius: 1.5rem;
    top: -18.9rem;
    padding: 6.4rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .talk-about-text {
        color: white;
        text-align: center;
    }
    .talk-about-text h1 {
        height: 82px;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 3.6rem;
        margin-bottom: 0.6rem;
    }
    .talk-about-text p {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.5rem;
    }
    .touch-btn {
        background-color: white;
        color: var(--dark-grey-color);
    }

    .circle {
        position: absolute;
    }
`;
const Footer = () => {
    let socialLogos = [
        {
            name: facebookLogo,
            alt: 'facebook',
        },
        {
            name: instagramLogo,
            alt: 'instagram',
        },
        {
            name: pinterestLogo,
            alt: 'pinterest',
        },
        {
            name: twitterLogo,
            alt: 'twitter',
        },
        {
            name: youtubeLogo,
            alt: 'youtube',
        },
    ];

    const renderList = socialLogos.map((item, idx) => {
        return (
            <img
                key={idx}
                src={item.name}
                alt={item.alt}
                className="social-icon"
            />
        );
    });
    return (
        <FooterContainer>
            <TallAboutContainer>
                <div className="talk-about-text">
                    <h1>Let’s talk about your project</h1>
                    <p>
                        Ready to take it to the next level? Contact us today and
                        find out how our expertise can help your business grow.
                    </p>
                </div>
                <a href="#" className="touch-btn link-btn">
                    GET IN TOUCH
                </a>
                <span className="circle talk-about-circle-one"></span>
                <span className="circle talk-about-circle-two"></span>
                <span className="circle talk-about-circle-three"></span>
                <span className="circle talk-about-circle-four"></span>
                <span className="circle talk-about-circle-five"></span>
            </TallAboutContainer>

            <div className="inner-div">
                <div className="footer-nav">
                    <img src={icon} alt="logo" className="logo" />
                    <ul className="links">
                        <li className="link">
                            <a href="#">Our Company</a>
                        </li>
                        <li className="link">
                            <a href="#">Location</a>
                        </li>
                        <li className="link">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-detail">
                    <div className="footer-detail-info">
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="footer-detail-info">
                        <p>Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                    <div className="social-icon-container">{renderList}</div>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
