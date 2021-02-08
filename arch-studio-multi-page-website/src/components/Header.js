import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '.';

import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icons/icon-hamburger.svg';
import close from '../assets/images/icons/icon-close.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false),
        mobileNavBtn = useRef();

    const mobileNavOpen = () => {
        mobileNavBtn.current.classList.add('change');
    };

    const mobileNavClosed = () => {
        setTimeout(function () {
            mobileNavBtn.current.classList.remove('change');
        }, 450);
    };

    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img
                            className="navbar__logo"
                            src={logo}
                            alt="company logo"
                        />
                    </Link>
                    <div className="navbar__links">
                        <NavLinks />
                    </div>
                    <div
                        className="navbar--mobile"
                        ref={mobileNavBtn}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={hamburger}
                            alt="hamburger logo"
                            onClick={mobileNavOpen}
                            className="hamburger-logo"
                        />
                        <img
                            src={close}
                            alt="close logo"
                            onClick={mobileNavClosed}
                            className={`close-logo ${!menuOpen ? 'spin' : ''}`}
                        />
                    </div>
                    <div
                        className={`navbar__links--mobile ${
                            menuOpen ? 'active' : ''
                        }`}>
                        <NavLinks />
                    </div>
                    <div className={`backdrop ${menuOpen ? 'active' : ''}`} />
                </nav>
            </header>
        </>
    );
};

export default Header;
