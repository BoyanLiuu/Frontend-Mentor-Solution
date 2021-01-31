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

    .logo-container {
        margin-left: 2.4rem;
    }

    .header-backdrop {
        z-index: 100;
        display: block;
        position: absolute;
        top: 9.6rem;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(29, 28, 30, 0.7);
        opacity: 0;
    }
    .active-opacity {
        opacity: 1;
    }

    .header-container {
        margin-top: 2.7rem;
        width: 100%;

        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .logo {
        width: 20.2rem;
        height: 2.7rem;
    }
    .burgerIcon {
        width: 2.4rem;
        height: 2rem;
        background-image: url(${burgerIcon});
        background-repeat: no-repeat;
        margin-right: 2.4rem;
        transition: all 0.3s;
    }
    .link-container {
        z-index: 110;
        position: absolute;
        top: 6.9rem;
        left: 0;
        width: 100%;
        height: 23.5rem;
        background-color: black;
        transform: translateY(-145%);
    }

    .active {
        transform: translateY(0);
    }
    .links {
        list-style: none;
        width: 32.7rem;
        height: 13.9rem;
        margin: 4.8rem 0 0 2.4rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .link a {
        font-size: 2.4rem;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 400;
        line-height: 2.5rem;
        letter-spacing: 0.2rem;
    }
    .link {
        transition: border 3s ease;
    }

    .link:hover {
        border-bottom: 1px solid white;
    }
    @media screen and (min-width: 768px) {
        height: 2.7rem;
        margin: 6.4rem auto;
        .link {
            height: 1.4rem;
            transition: border 3s ease;
        }
        .link :hover {
            border-color: var(--dark-grey-color);
        }

        .header-backdrop {
            display: none;
        }
        .header-container {
            width: 68.9rem;
            height: 2.7rem;
            margin: 0;
            padding: 0;
        }
        .logo-container {
            margin: 0;
        }

        .burgerIcon {
            display: none;
        }
        .link-container {
            position: relative;
            transform: translateY(0);
            top: 0;
            width: 37.1rem;
            height: 1.4rem;
            background-color: white;
        }
        .links {
            width: 100%;
            height: 1.4rem;
            flex-direction: row;
            margin: 0;
        }
        .link a {
            font-size: 1.4rem;
            line-height: 1.4rem;
            color: var(--dark-grey-color);
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
    const handleClick = () => {
        const backdrop = document.querySelector('.header-backdrop');
        const linkContainer = document.querySelector('.link-container');
        const burger = document.querySelector('.burgerIcon');

        if (backdrop.classList.contains('active-opacity')) {
            burger.style.backgroundImage = `url(${burgerIcon})`;
        } else {
            burger.style.backgroundImage = `url(${closeIcon})`;
        }
        backdrop.classList.toggle('active-opacity');
        linkContainer.classList.toggle('active');
    };
    return (
        <HeaderDiv>
            <div className="header-container">
                <Link to="/" className="logo-container">
                    <img src={icon} alt="logo" className="logo" />
                </Link>
                <div
                    className="burgerIcon cursor-true"
                    onClick={handleClick}></div>
                <div className="link-container">
                    <ul className="links">
                        <li className="link">
                            <Link to="/about">Our Company</Link>
                        </li>
                        <li className="link">
                            <Link to="/locations">Locations</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-backdrop"></div>
        </HeaderDiv>
    );
};

export default Header;
