/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import icon from '../assets/images/logo-dark.png';
import burgerIcon from '../assets/images/shared/mobile/icon-hamburger.svg';
import closeIcon from '../assets/images/shared/mobile/icon-close.svg';
const HeaderDiv = styled.header`
    width: 100%;
    height: 9.6rem;
    display: flex;

    justify-content: center;
    .header-container {
        margin-top: 2.7rem;
        width: 100%;
        padding: 0 2.4rem;
        display: flex;
        justify-content: space-between;
    }
    .logo {
        width: 20.2rem;
        height: 2.7rem;
    }
    .burgerIcon {
        width: 2.4rem;
        height: 2rem;
        background-image: url(${burgerIcon});
    }

    @media screen and (min-width: 768px) {
        height: 2.7rem;
        margin: 6.4rem auto;
        .header-container {
            width: 68.9rem;
            height: 2.7rem;
            margin: 0;
            padding: 0;
        }
    }

    @media screen and (min-width: 1440px) {
        margin-bottom: 5.2rem;
        .header-container {
            width: 111rem;
        }
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <div className="header-container">
                <Link to="/">
                    <img src={icon} alt="logo" className="logo" />
                </Link>

                <div className="burgerIcon cursor-true"></div>
            </div>
        </HeaderDiv>
    );
};

export default Header;
