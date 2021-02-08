import React, { useContext } from 'react';
import { ResizeContext } from '../context/resize';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/icons/icon-arrow.svg';

const HomepageAbout = () => {
    const { viewport } = useContext(ResizeContext);
    const img = require(`../assets/images/home/${viewport}/image-small-team.jpg`);
    return (
        <div className="about-page-redirect">
            <div className="about-page-redirect__textbox">
                <img
                    src={img}
                    alt="small team"
                    className="about-page-redirect__backdrop"
                />
                <h2>
                    Small team, <br /> big ideas
                </h2>
                <Link to="/about" className=" about-page-redirect__btn">
                    <span>About Us</span>
                    <img
                        className="about-page-redirect__arrow-icon"
                        src={arrow}
                        alt="Arrow to redirect to about page"
                    />
                </Link>
            </div>
        </div>
    );
};

export default HomepageAbout;
