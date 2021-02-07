import React from 'react';
import { AboutHero, OurHeritage, Leaders } from '../components';

const About = () => (
    <div className="page">
        <div className="page__directory">
            <span>About Us</span>
        </div>
        <AboutHero />
        <OurHeritage />
        <Leaders />
    </div>
)

export default About;