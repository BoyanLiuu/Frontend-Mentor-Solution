import React from 'react';
import { Link } from 'react-router-dom';
import aboutLogo from '../assets/images/icons/down-arrows.svg';
const HomeHero = ({ viewport }) => {
    const heroImg = require(`../assets/images/homepage/${viewport}/image-homepage-hero@2x.jpg`)
        .default;
    return (
        <div className="hero-container">
            <img src={heroImg} alt="hero" className="hero-container__img" />

            <div className="hero-container__text">
                <h1>
                    Hey, I’m Alex Spencer and I love building beautiful websites
                </h1>
                <Link to="/about" className="hero-container__about-me-btn  ">
                    <div className="hero-container__about-logo">
                        <img src={aboutLogo} alt="logo" />
                    </div>
                    <span> About Me</span>
                </Link>
            </div>
        </div>
    );
};

export default HomeHero;
