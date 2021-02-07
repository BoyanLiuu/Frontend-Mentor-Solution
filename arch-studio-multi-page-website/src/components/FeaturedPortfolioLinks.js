import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResizeContext } from '../context/resize';
import { featuredLinks as data } from './../assets/data/data';
const FeaturedPortfolioLinks = () => {
    const { viewport } = useContext(ResizeContext);
    const renderList = data.map((item, idx) => {
        const imgUrl = require(`../assets/images/portfolio/${viewport}/${item.url}`);
        return (
            <Link
                to="/portfolio"
                key={idx}
                className="featured__section__portfolio">
                <div className="featured__section__portfolio__image-container">
                    <img
                        src={imgUrl}
                        className="featured__section__portfolio__image"
                        alt="Thumbnail link to portfolio page"
                    />
                </div>

                <h1>{idx + 1}</h1>
                <div className="featured__section__portfolio__textbox">
                    <h5>{item.title}</h5>
                    <p>View All Projects</p>
                </div>
            </Link>
        );
    });

    return <>{renderList}</>;
};

export default FeaturedPortfolioLinks;
