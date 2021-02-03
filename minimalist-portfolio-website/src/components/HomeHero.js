import React from 'react';
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
                <a href="#about-me" className="hero-container__about-me-btn  ">
                    <div className="hero-container__about-logo">
                        <img src={aboutLogo} alt="logo" />
                    </div>
                    <span> About Me</span>
                </a>
            </div>
        </div>
    );
};

export default HomeHero;
