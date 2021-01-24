/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

import infoImg from '../assets/img/mobile/image-interactive.jpg';
const InfoDiv = styled.div`
    padding: 0 2.4rem;
    width: 100%;
    margin-bottom: 9.6rem;

    .info-img {
        width: 100%;
        margin-bottom: 4.8rem;
    }
    .info-title {
        padding: 0 2.4rem;
        text-align: center;
    }
    .info-title h2 {
        font-size: ${(prop) => prop.theme.mediumFont};
        font-weight: 300;
        line-height: 3.2rem;
        text-transform: uppercase;
        color: black;
    }

    .info-title p {
        font-size: ${(prop) => prop.theme.xsmallFont};
        font-family: 'Alata', sans-serif;
        font-weight: 400;
        line-height: 2.5rem;
        opacity: 0.5;
        color: black;
    }
`;

const InfoSection = () => {
    return (
        <InfoDiv>
            <img src={infoImg} alt="info " className="info-img" />
            <div className="info-title">
                <h2>The leader in interactive VR</h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </InfoDiv>
    );
};

export default InfoSection;
