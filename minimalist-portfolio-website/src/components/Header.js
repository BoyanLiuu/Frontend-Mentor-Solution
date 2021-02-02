/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/down-arrows.svg';
import React from 'react';
const HeaderDiv = styled.header`
    width: 100%;
    height: 3.2rem;
    nav {
        width: 31.1rem;
        height: 100%;
    }
    @media screen and (min-width: 1440px) {
    }
`;

const Header = () => {
    const handleClick = () => {
        const backdrop = document.querySelector('.header-backdrop');
        const linkContainer = document.querySelector('.link-container');
        const burger = document.querySelector('.burgerIcon');

        // if (backdrop.classList.contains('active-opacity')) {
        //     burger.style.backgroundImage = `url(${burgerIcon})`;
        // } else {
        //     burger.style.backgroundImage = `url(${closeIcon})`;
        // }
        backdrop.classList.toggle('active-opacity');
        linkContainer.classList.toggle('active');
    };
    return (
        <HeaderDiv>
            <nav>
                <a href="/index.html">
                    <img
                        src="/assets/shared/desktop/logo-dark.png"
                        alt="logo"
                        className="logo"
                    />
                </a>

                <ul className="links">
                    <li className="link">
                        <Link to="/">home</Link>
                    </li>
                    <li className="link">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="link">
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>

                <div class="menu-btn__burger"></div>
            </nav>
        </HeaderDiv>
    );
};

export default Header;
