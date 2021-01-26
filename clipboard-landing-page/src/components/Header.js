/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import icon from '../assets/img/logo.svg';
import mobileBg from '../assets/img/bg-header-mobile.png';
import desktopBg from '../assets/img/bg-header-desktop.png';
const HeaderDiv = styled.div`
    width: 100%;
    .logo-container {
        padding-top: 12.3rem;
        display: flex;
        justify-content: center;
        height: 36.3rem;
        background-image: url(${mobileBg});
        background-size: cover;
    }
    .logo {
        width: 12.5rem;
        height: 12.5rem;
    }
    .product-info-container {
        width: 31.1rem;
        margin: -6.4rem auto 0 auto;
        text-align: center;
    }
    .product-info-container h1 {
        font-size: 3.2rem;
        line-height: 4.3rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: hsl(210, 10%, 33%);
    }
    .product-info-container h2 {
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 400;
        margin-bottom: 4.8rem;
        color: hsl(201, 11%, 66%);
    }

    @media screen and (min-width: 700px) {
        .product-info-container {
            width: 100%;
            padding: 0 3rem;
        }
        .product-info-container h1 {
            font-size: 4.6em;
            line-height: 6.1rem;
        }
        .product-info-container h2 {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    @media screen and (min-width: 1100px) {
        .logo-container {
            background-image: url(${desktopBg});
            background-size: cover;
        }
        .product-info-container {
            width: 84rem;

            padding: 0;
        }
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <header>
                <div className="logo-container">
                    <img src={icon} alt="logo" className="logo" />
                </div>

                <div className="product-info-container">
                    <h1>A history of everything you copy</h1>
                    <h2>
                        Clipboard allows you to track and organize everything
                        you copy. Instantly access your clipboard on all your
                        devices.
                    </h2>

                    <div className="download-btn-container">
                        <button className="ios-btn"> Download for iOS</button>
                        <button className="mac-btn"> Download for Mac</button>
                    </div>
                </div>
            </header>
        </HeaderDiv>
    );
};

export default Header;
