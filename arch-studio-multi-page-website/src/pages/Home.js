import React from 'react';
import { HomePageHero, Welcome, HomepageAbout, Featured } from '../components';

const Home = () => (
    <>
        <div id="location-design">
            <span></span>
            <span>Home</span>
        </div>
        <HomePageHero />
        <Welcome />
        <HomepageAbout />
        <Featured />
    </>
);

export default Home;
