import React, { useEffect } from 'react';
import { PortfolioLinks } from '../components';
import { portfolioLinks as data } from './../assets/data/data';
const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <main className="slideY">
            <div id="location-design">
                <span></span>
                <span>Portfolio</span>
            </div>
            <div className="portfolio-page">
                <div className="portfolio-page__grid">
                    <PortfolioLinks data={data} />
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
