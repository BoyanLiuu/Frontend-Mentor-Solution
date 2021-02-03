/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import icon from '../assets/img/logo.svg';
import React from 'react';
import { ReactComponent as FacebookIcon } from '../assets/img/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/img/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../assets/img/icon-twitter.svg';

const FooterContainer = styled.footer`
    width: 100%;
    height: 50rem;
    background-color: rgba(158, 171, 178, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-div {
        width: 16rem;
        height: 39.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        width: 5.5rem;
        height: 5.5rem;
    }
    .links {
        height: 23rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    .link {
        list-style: none;
    }
    .link :hover {
        color: hsl(171, 66%, 44%);
    }
    .link a {
        text-decoration: none;
        font-size: 1.8rem;
        line-height: 3rem;
        color: #4c545c;
    }
    .social-logo {
        cursor: pointer;
    }
    .social-logo:hover path {
        fill: hsl(171, 66%, 44%);
    }
    .social-icon-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    @media screen and (min-width: 700px) {
        height: 15rem;
        width: 100%;

        .inner-div {
            width: 100%;
            height: 100%;
            padding: 0 3rem;
            flex-direction: row;
        }
        .links {
            height: 7.2rem;
            width: 50rem;

            flex-wrap: wrap;
            text-align: left;
        }
        .link {
            display: inline-block;
            width: auto;
            height: 3rem;
        }
        .social-icon-container {
            width: 12rem;
        }
    }

    @media screen and (min-width: 1440px) {
        .inner-div {
            width: 111rem;
            padding: 0;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="inner-div">
                <img src={icon} alt="logo" className="logo" />
                <ul className="links">
                    <li className="link">
                        <a href="#">FAQs</a>
                    </li>
                    <li className="link">
                        <a href="#">Contact Us</a>
                    </li>
                    <li className="link">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li className="link">
                        <a href="#">Press Kit</a>
                    </li>
                    <li className="link">
                        <a href="#">Install Guide</a>
                    </li>
                </ul>
                <div className="social-icon-container">
                    <FacebookIcon className="social-logo" />
                    <InstagramIcon className="social-logo" />
                    <TwitterIcon className="social-logo" />
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
