/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../components/HomeHero';
import HomeAboutMe from '../components/HomeAboutMe';
function Home({ viewport }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Hero viewport={viewport} />
            <HomeAboutMe viewport={viewport} />
        </>
    );
}

export default Home;
