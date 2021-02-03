/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
// import hamburger from '../assets/images/icons/hamburger.svg';
// import closeIcon from '../assets/images/icons/close.svg';
import React from 'react';

const Header = () => {
    const handleClick = () => {
        const burger = document.querySelector('.header__burger');
        burger.classList.toggle('active');
        console.log('wtf');
        // const linkContainer = document.querySelector('.link-container');
        // const burger = document.querySelector('.burgerIcon');
        // if (backdrop.classList.contains('active-opacity')) {
        //     burger.style.backgroundImage = `url(${burgerIcon})`;
        // } else {
        //     burger.style.backgroundImage = `url(${closeIcon})`;
        // }
        // backdrop.classList.toggle('active-opacity');
        // linkContainer.classList.toggle('active');
    };
    return (
        <header className="header">
            <nav>
                <div className="header__logo icon--cursor" />
                <div
                    className="header__burger icon--cursor"
                    onClick={handleClick}
                />
                <ul className="header__nav-items hide">
                    <li className="header__nav-item">
                        <Link
                            className="header__nav-item_link  header__nav-item_link--active"
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link
                            className="header__nav-item_link  header__nav-item_link--active"
                            to="/">
                            Portfolio
                        </Link>
                        <a className="t-nav-link t-dark-gray" to="/">
                            Portfolio
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <Link
                            className="header__nav-item_link  header__nav-item_link--active"
                            to="/">
                            Contact Me
                        </Link>
                    </li>
                </ul>

                <ul className="header__mobile-nav-items">
                    <li className="header__mobile-nav-item">
                        <a className="header__mobile-nav-link" to="/">
                            Home
                        </a>
                    </li>
                    <li className="mobile-nav__nav-item">
                        <a className="header__mobile-nav-link" to="/">
                            Portfolio
                        </a>
                    </li>
                    <li className="mobile-nav__nav-item">
                        <a className="header__mobile-nav-link" to="/">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
