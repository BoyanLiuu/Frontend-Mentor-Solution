/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoWhite.svg';
import github from '../assets/images/icons/github.svg';
import twitter from '../assets/images/icons/twitter.svg';
import linkedIn from '../assets/images/icons/linkedin.svg';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container__contact-section">
                <p className="footer-container__contact-text">
                    Interested in doing a project together?
                </p>

                <Link className="footer-container__contact_link" to="/">
                    Contact Me
                </Link>
            </div>

            <footer>
                <div className="inner-container">
                    <img
                        src={logo}
                        alt="logo"
                        className="inner-container__logo"
                    />
                    <ul className="inner-container-items">
                        <li className="inner-container-item">
                            <Link className="inner-container__item_link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link className="inner-container__item_link" to="/">
                                Portfolio
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link className="inner-container__item_link" to="/">
                                Contact Me
                            </Link>
                        </li>
                    </ul>

                    <div className="inner-container__social-logos">
                        <img
                            src={github}
                            alt="github"
                            className="inner-container__social-logo"
                        />
                        <img
                            src={twitter}
                            alt="twitter"
                            className="inner-container__social-logo"
                        />
                        <img
                            src={linkedIn}
                            alt="linkedIn"
                            className="inner-container__social-logo"
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
