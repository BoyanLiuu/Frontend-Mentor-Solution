import { Link } from 'react-router-dom';

const HomeAboutMe = ({ viewport }) => {
    const aboutImg = require(`../assets/images/homepage/${viewport}/image-homepage-profile@2x.jpg`)
        .default;
    return (
        <div className="aboutme-container">
            <img
                src={aboutImg}
                alt="about me img"
                className="aboutme-container__img"
            />
            <div className="aboutme-container__info">
                <h1> About Me</h1>
                <p>
                    I’m a junior front-end developer looking for a new role in
                    an exciting company. I focus on writing accessible HTML,
                    using modern CSS practices and writing clean JavaScript.
                    When writing JavaScript code, I mostly use React, but I can
                    adapt to whatever tools are required. I’m based in London,
                    UK, but I’m happy working remotely and have experience in
                    remote teams. When I’m not coding, you’ll find me outdoors.
                    I love being out in nature whether that’s going for a walk,
                    run or cycling. I’d love you to check out my work.
                </p>
                <Link to="/portfolio" className="aboutme-container__link-btn">
                    Go to portfolio
                </Link>
            </div>
        </div>
    );
};

export default HomeAboutMe;
