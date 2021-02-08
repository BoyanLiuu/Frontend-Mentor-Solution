import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResizeContext } from '../context/resize';

const PortfolioLinks = ({ data }) => {
    const { viewport } = useContext(ResizeContext);
    const renderList = data.map((item, idx) => {
        const imgUrl = require(`../assets/images/portfolio/${viewport}/${item.url}`);
        return (
            <Link to="/portfolio" key={idx} className="portfolio-link">
                <div className="portfolio-link__image-container">
                    <img
                        src={imgUrl}
                        className="portfolio-link__image"
                        alt="Thumbnail link to portfolio page"
                    />
                </div>

                <h1>{item.projectDate ? '' : idx + 1}</h1>
                <div className="portfolio-link__textbox">
                    <h5>{item.title}</h5>
                    <p>
                        {item.projectDate
                            ? item.projectDate
                            : 'View All Projects'}
                    </p>
                </div>
            </Link>
        );
    });

    return <>{renderList}</>;
};

export default PortfolioLinks;
