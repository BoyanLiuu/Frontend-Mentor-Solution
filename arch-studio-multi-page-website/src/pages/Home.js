import React, { useEffect } from 'react';
import { HomePageHero, Welcome, HomepageAbout, Featured } from '../components';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <main className="slideY">
            <div id="location-design">
                <span></span>
                <span>Home</span>
            </div>
            <HomePageHero />
            <Welcome />
            <HomepageAbout />
            <Featured />
        </main>
    );
};

export default Home;
