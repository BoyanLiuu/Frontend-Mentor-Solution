/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoWhite.svg';
import SocialIcons from '../components/SocialIcons';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container__contact-section">
                <p className="footer-container__contact-text">
                    Interested in doing a project together?
                </p>

                <Link className="footer-container__contact_link" to="/contact">
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
                    <ul className="inner-container__items">
                        <li className="inner-container-item">
                            <Link className="inner-container__item_link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link
                                className="inner-container__item_link"
                                to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="inner-container-item">
                            <Link
                                className="inner-container__item_link"
                                to="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <SocialIcons />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
