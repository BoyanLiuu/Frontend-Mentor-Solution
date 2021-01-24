/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import logo from '../assets/img/logo.svg';
import bgImage from '../assets/img/mobile/image-hero.jpg';
const HeaderDiv = styled.header`
    background-image: url(${bgImage});
    background-size: cover;

    height: 65rem;

    padding: 4rem 2.4rem 0;

    margin-bottom: 9.6rem;

    nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16.7rem;
    }
    .logo {
        width: 14.4rem;
    }
    .link {
        text-decoration: none;
    }
    nav ul {
        list-style: none;
        display: none;
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
`;

const Header = () => {
    return (
        <HeaderDiv>
            <nav id="menu">
                <img src={logo} alt="logo" className="logo" />

                <div className="burger" id="burger">
                    <span className="burger-btn"></span>
                </div>
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
            <div className="title-container">
                <h1 className="title">Immersive experiences that deliver</h1>
            </div>
        </HeaderDiv>
    );
};

export default Header;
