import React from 'react';
import { PortfolioLinks } from '../components';
import { portfolioLinks as data } from './../assets/data/data';
const Portfolio = () => {
    return (
        <>
            <div id="location-design">
                <span></span>
                <span>Portfolio</span>
            </div>
            <div className="portfolio-page">
                <div className="portfolio-page__grid">
                    <PortfolioLinks data={data} />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
