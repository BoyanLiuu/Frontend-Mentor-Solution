/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';

import facebookIcon from '../assets/img/icon-facebook.svg';
import instagramIcon from '../assets/img/icon-instagram.svg';
import pinterestIcon from '../assets/img/icon-pinterest.svg';
import twitterIcon from '../assets/img/icon-twitter.svg';

const FooterContainer = styled.footer`
    width: 100%;
    height: 47rem;
    background-color: black;
    padding-top: 5.6rem;
    display: flex;
    justify-content: center;
    .inner-div {
        width: 27.3rem;
    }
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    font-size: ${(prop) => prop.theme.xsmallFont};
    .logo-footer {
        width: 14.4rem;
        margin-bottom: 3.2rem;
        cursor: pointer;
    }
    .links {
        height: 18.9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        margin-bottom: 4.8rem;
    }

    .link {
        color: white;
        text-decoration: none;
        line-height: 2.5rem;
    }

    .link:hover {
        border-bottom: 1px solid white;
    }
    .social-icon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .social {
        width: 14.4rem;
        display: flex;
        justify-content: space-between;
    }
    .copy {
        font-family: 'Alata', sans-serif;
        opacity: 0.5;
        color: white;
        line-height: 2.5rem;
        margin-top: 1.6rem;
    }

    @media screen and (min-width: 950px) {
        padding: 4.4rem 0;

        .links {
            width: 100%;
            flex-direction: row;
            height: 3.5rem;
            justify-content: space-between;
            margin-bottom: 0;
        }
        .inner-div {
            width: 80rem;
            height: 8.3rem;
            display: flex;
            justify-content: space-between;
        }
        .logo-footer {
            margin-bottom: 0;
        }
        nav {
            width: 38rem;
            align-items: flex-start;
            justify-content: space-between;
        }
        .social-icon-container {
            align-items: flex-end;

            justify-content: space-between;
        }
        .copy {
            height: 3.5rem;
            margin-top: 0;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 100rem;
    }

    @media screen and (min-width: 1400px) {
        width: 111.4rem;
    }
`;

const Footer = () => {
    const iconLst = [
        {
            icon: facebookIcon,
            name: 'facebook',
            link: 'https://www.facebook.com',
        },
        {
            icon: twitterIcon,
            name: 'twitter',
            link: 'https://www.twitter.com',
        },
        {
            icon: pinterestIcon,
            name: 'pinterest',
            link: 'https://www.pinterest.com',
        },
        {
            icon: instagramIcon,
            name: 'instagram',
            link: 'https://www.instagram.com',
        },
    ];

    const renderIconLst = iconLst.map((item, idx) => {
        return (
            <a href={item.link} aria-label={`${item.name}-link`}>
                <img
                    className="social-logo"
                    src={item.icon}
                    alt={`${item.name}`}
                />
            </a>
        );
    });

    return (
        <FooterContainer>
            <div className="inner-div">
                <nav>
                    <img src={logo} alt="logo" className="logo-footer" />

                    <ul className="links">
                        <li>
                            <a href="#" className="link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="link">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="link">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="link">
                                Support
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="social-icon-container">
                    <div class="social">{renderIconLst}</div>
                    <p class="copy">© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
