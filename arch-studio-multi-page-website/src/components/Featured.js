import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioLinks } from '../components';
import arrow from '../assets/images/icons/icon-arrow.svg';
import { featuredLinks as data } from '../assets/data/data';
const Featured = () => (
    <div className="featured-section">
        <div className="featured-section__top">
            <h2 className="featured-section__heading">Featured</h2>
            <Link to="/portfolio" className="featured-section__btn hide">
                <span>See All</span>
                <img src={arrow} alt="Arrow to redirect to portfolios" />
            </Link>
        </div>

        <div className="featured-section__portfolios">
            <PortfolioLinks data={data} />
        </div>
        <Link to="/portfolio" className="featured-section__btn last">
            <span>See All</span>
            <img src={arrow} alt="Arrow to redirect to portfolios" />
        </Link>
    </div>
);

export default Featured;
