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
    @media screen and (min-width: 950px) {
        width: 80rem;
        margin: 0 auto;
        padding: 0;
        margin-bottom: 18.7rem;

        position: relative;

        .info-title {
            position: absolute;
            bottom: 4.8rem;
            right: 0;
            width: 54.1rem;
            height: 31.7rem;
            padding: 9.7rem 0 0 9.7rem;
            background-color: white;
            text-align: start;
        }
        .info-title h2 {
            font-size: ${(prop) => prop.theme.xlargeFont};
            line-height: 4.8rem;
        }
        .info-title p {
            margin-top: 2.5rem;
        }

        .info-img {
            width: 73.1rem;
            height: 50rem;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 100rem;
    }

    @media screen and (min-width: 1400px) {
        width: 111.4rem;
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
