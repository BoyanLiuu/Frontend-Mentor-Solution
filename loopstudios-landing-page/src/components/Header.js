/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import logo from '../assets/img/logo.svg';
import bgImage from '../assets/img/mobile/image-hero.jpg';
import bgDesktopImage from '../assets/img/desktop/image-hero.jpg';
import burgerIcon from '../assets/img/icon-hamburger.svg';
import closeIcon from '../assets/img/icon-close.svg';
const HeaderDiv = styled.header`
    background-image: url(${bgImage});
    background-size: cover;

    height: 65rem;

    padding: 4rem 2.4rem 0;

    margin-bottom: 9.6rem;

    nav {
        margin-bottom: 16.7rem;
    }
    .logo-btn-container {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        width: 14.4rem;
        z-index: 10;
    }
    .link {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-size: ${(prop) => prop.theme.smallFont};
        line-height: 2.5rem;
        position: relative;
    }

    nav ul li {
        display: inline-block;
    }

    .title-container {
        width: 100%;
        height: 19.6rem;
        padding: 2.4rem;
        border: 1px solid white;
    }
    .title {
        font-size: ${(prop) => prop.theme.largeFont};
        font-weight: 300;
        line-height: 3.8rem;
        text-transform: uppercase;
        color: white;
    }
    .burger-btn {
        width: 2.4rem;
        height: 1.6rem;
        cursor: pointer;
        background-image: url(${burgerIcon});
        z-index: 10;
    }
    .close-btn {
        width: 1.8rem;
        height: 1.8rem;
        display: none;
        cursor: pointer;
        background-image: url(${closeIcon});
        z-index: 10;
    }

    @media screen and (max-width: 950px) {
        nav.active {
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 5;
            display: flex;
            flex-direction: column;
            background: #000;
            transition: top 0.5s ease;
        }
        .logo-btn-container.active {
            margin: 4rem 2.4rem 0;
        }
        .links {
            display: none;
        }
        .links.active {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 22.1rem;
            margin: 23.3rem 0 0 2.4rem;
        }
    }

    @media screen and (min-width: 950px) {
        background-image: url(${bgDesktopImage});

        padding-left: 0;
        padding-right: 0;
        margin-bottom: 16rem;
        display: flex;
        justify-content: center;

        nav {
            display: flex;
            justify-content: space-between;
        }
        .inner-container {
            width: 80rem;
        }

        .title-container {
            width: 55rem;
            height: 23.8rem;
            padding: 4rem;
        }

        .title {
            font-size: 6rem;
            line-height: 6rem;
        }

        .burger-btn {
            display: none;
        }
        .menu {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            justify-content: space-between;
            width: 38rem;
        }

        .link {
            font-family: 'Alata', sans-serif;
            font-size: ${(prop) => prop.theme.xsmallFont};
            position: relative;
        }
    }

    @media screen and (min-width: 1000px) {
        .inner-container {
            width: 100rem;
        }

        .title-container {
            width: 60rem;
            height: 27.8rem;
            padding: 4rem;
        }

        .title {
            font-size: 6.5rem;
            line-height: 6.5rem;
        }
    }

    @media screen and (min-width: 1400px) {
        .inner-container {
            width: 111.4rem;
        }

        .title-container {
            width: 65rem;
            height: 27.8rem;
            padding: 4rem;
        }

        .title {
            font-size: 7.2rem;
            line-height: 7rem;
        }
    }
`;

const Header = () => {
    const handleClick = () => {
        const mainMenu = document.querySelector('#menu');

        const logoContainer = document.querySelector('.logo-btn-container');

        const links = document.querySelector('.links');

        const burgerBtn = document.querySelector('.burger-btn');

        const closeBtn = document.querySelector('.close-btn');
        mainMenu.classList.toggle('active');
        logoContainer.classList.toggle('active');
        links.classList.toggle('active');
        //show
        if (burgerBtn.classList.contains('active')) {
            burgerBtn.style.display = 'none';
            burgerBtn.classList.toggle('active');
            closeBtn.style.display = 'block';
            mainMenu.style.top = '0';
        } else {
            //close
            mainMenu.style.top = '-100%';
            burgerBtn.style.display = 'block';
            closeBtn.style.display = 'none';
            burgerBtn.classList.toggle('active');
        }
    };
    return (
        <HeaderDiv>
            <div className="inner-container">
                <nav id="menu">
                    <div className="logo-btn-container">
                        <img src={logo} alt="logo" className="logo" />

                        <div
                            className="burger-btn active"
                            id="burger"
                            onClick={handleClick}></div>
                        <div className="close-btn" onClick={handleClick}></div>
                    </div>

                    <ul className="links ">
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
                <div className="title-container">
                    <h1 className="title">
                        Immersive experiences that deliver
                    </h1>
                </div>
            </div>
        </HeaderDiv>
    );
};

export default Header;
