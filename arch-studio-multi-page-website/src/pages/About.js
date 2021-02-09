import React, { useEffect } from 'react';
import { SideHero, OurHeritage, Leaders } from '../components';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const heading = 'About';
    const subheading = ' Your team of professionals';
    const content =
        ' Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.';
    return (
        <main className="slideY">
            <div id="location-design">
                <span></span>
                <span>About</span>
            </div>

            <SideHero
                heading={heading}
                subheading={subheading}
                content={content}
            />
            <OurHeritage />
            <Leaders />
        </main>
    );
};

export default About;
