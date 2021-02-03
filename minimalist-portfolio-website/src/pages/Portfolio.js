import PortfolioCard from '../components/PortfolioCard';
import xx from '../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import { useEffect } from 'react';

function About({ viewport }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const projectList = [
        {
            title: 'Manage',
            img: `${viewport}/image-portfolio-manage@2x.jpg`,
            detail:
                'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        },
        {
            title: 'Bookmark',
            img: `${viewport}/image-portfolio-bookmark@2x.jpg`,
            detail:
                'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
        },
        {
            title: 'Insure',
            img: `${viewport}/image-portfolio-insure@2x.jpg`,
            detail:
                'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
        },
        {
            title: 'Fylo',
            img: `${viewport}/image-portfolio-fylo@2x.jpg`,
            detail:
                'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
        },
    ];

    const renderList = projectList.map((item, idx) => {
        return <PortfolioCard key={idx} card={item} />;
    });

    return <div className="portfolio-cards">{renderList}</div>;
}

export default About;
