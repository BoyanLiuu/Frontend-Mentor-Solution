import React, { useState } from 'react';
import { PortfolioLink } from '../components';
import data from '../portfolios.json';

const Portfolio = () => {
    const [portfolios] = useState(data);

    return (
        <div className="page">
            <div className="page__directory">
                <span>Portfolio</span>
            </div>
            <div className="portfolios__grid">
                {portfolios.map((portfolio) => (
                    <PortfolioLink 
                        link={portfolio}
                        key={portfolio.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;