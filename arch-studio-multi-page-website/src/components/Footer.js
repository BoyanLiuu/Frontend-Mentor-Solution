import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../components';
import footerLogo from '../assets/images/logoWhite.svg';
import arrow from '../assets/images/icons/icon-arrow.svg';

const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer__logo__container">
                <Link to="/">
                    <img
                        className="footer__logo"
                        src={footerLogo}
                        alt="Arch company logo"
                    />
                </Link>
            </div>
            <div className="footer__links">
                <NavLinks />
            </div>
            <Link to="/portfolio" className="footer__btn">
                <span>See Our Portfolio</span>
                <img
                    className="footer__btn__arrow"
                    src={arrow}
                    alt="Arrow to redirect to portfolio"
                />
            </Link>
        </div>
    </footer>
);

export default Footer;
