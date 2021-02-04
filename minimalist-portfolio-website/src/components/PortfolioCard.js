import { Link } from 'react-router-dom';

const PortfolioCard = ({ card }) => {
    const { title, img, detail } = card;
    const projectImg = require(`../assets/images/portfolio/${img}`).default;
    return (
        <div className="portfolio-card">
            <img src={projectImg} alt="title" className="portfolio-card__img" />
            <div className="portfolio-card__info">
                <h1 className="portfolio-card__title">{title}</h1>
                <p className="portfolio-card__detail">{detail}</p>
                <Link
                    to={`/portfolio/${title.toLowerCase()}`}
                    className="portfolio-card__link-btn">
                    View Project
                </Link>
            </div>
        </div>
    );
};

export default PortfolioCard;
