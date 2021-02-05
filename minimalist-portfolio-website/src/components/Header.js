/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom';
// import hamburger from '../assets/images/icons/hamburger.svg';
// import closeIcon from '../assets/images/icons/close.svg';
import React from 'react';

const Header = () => {
    const handleClick = () => {
        const burger = document.querySelector('.header__burger');

        const mobildList = document.querySelector('.header__mobile-nav-items');
        burger.classList.toggle('active');
        mobildList.classList.toggle('hide');
    };

    return (
        <header className="header">
            <nav>
                <Link to="/">
                    <div className="header__logo icon--cursor" />
                </Link>

                <div
                    className="header__burger icon--cursor"
                    onClick={handleClick}
                />
                <ul className="header__nav-items">
                    <li className="header__nav-item">
                        <NavLink
                            exact
                            activeClassName="header__nav-item_link--active"
                            className="header__nav-item_link"
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            activeClassName="header__nav-item_link--active"
                            className="header__nav-item_link"
                            to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            activeClassName="header__nav-item_link--active"
                            className="header__nav-item_link"
                            to="/contact">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>

                <ul className="header__mobile-nav-items">
                    <li className="header__nav-item">
                        <Link className="header__mobile-nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link
                            className="header__mobile-nav-link"
                            to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__mobile-nav-link" to="/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
