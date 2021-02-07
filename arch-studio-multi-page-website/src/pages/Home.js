import React from 'react';
import { HomePageHero, Welcome, HomepageAbout, Featured } from '../components';

const Home = () => (
    <>
        <div className="page__directory">
            <span>Home</span>
        </div>
        <HomePageHero />
        <Welcome />
        <HomepageAbout />
        <Featured />
    </>
);

export default Home;
