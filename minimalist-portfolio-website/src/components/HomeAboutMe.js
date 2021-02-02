import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HomeAboutMeDiv = styled.div`
    @media screen and (min-width: 700px) and (max-width: 1100px) {
    }

    @media screen and (min-width: 1100px) {
    }
`;

const HomeAboutMe = () => {
    return (
        <HomeAboutMeDiv>
            <div className="inner-container">
                <div className="about-me-img" />
                <div className="info-container">
                    <h1> About Me</h1>
                    <p>
                        I’m a junior front-end developer looking for a new role
                        in an exciting company. I focus on writing accessible
                        HTML, using modern CSS practices and writing clean
                        JavaScript. When writing JavaScript code, I mostly use
                        React, but I can adapt to whatever tools are required.
                        I’m based in London, UK, but I’m happy working remotely
                        and have experience in remote teams. When I’m not
                        coding, you’ll find me outdoors. I love being out in
                        nature whether that’s going for a walk, run or cycling.
                        I’d love you to check out my work.
                    </p>
                    <Link to="/portfolio" className="portfolio-btn  link-btn">
                        Go to portfolio
                    </Link>
                </div>
            </div>
        </HomeAboutMeDiv>
    );
};

export default HomeAboutMe;
