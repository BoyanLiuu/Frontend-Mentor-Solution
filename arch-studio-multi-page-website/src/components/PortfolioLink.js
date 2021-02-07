import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResizeContext } from '../context/resize';

const PortfolioLink = ({ link: { picture, projectDate, projectName } }) => {
    const { viewport } = useContext(ResizeContext);

    return (
        <Link to="#" className="portfolio__thumbnail">
            <img
                className="portfolio__thumbnail__background"
                src={
                    viewport >= 805
                        ? require(`../assets/images/portfolio/desktop/` +
                              picture)
                        : viewport >= 500
                        ? require(`../assets/images/portfolio/tablet/` +
                              picture)
                        : require(`../assets/images/portfolio/mobile/` +
                              picture)
                }
                alt={`Link to ${projectName} project`}
            />
            <div className="portfolio__thumbnail__textbox">
                <h4 className="portfolio__thumbnail__textbox--name">
                    {projectName}
                </h4>
                <small className="portfolio__thumbnail__textbox--date">
                    {projectDate}
                </small>
            </div>
        </Link>
    );
};

export default PortfolioLink;
