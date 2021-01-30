/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';

import friendlySvg from '../assets/images/home/illustration-friendly.svg';
import passionateSvg from '../assets/images/home/illustration-passionate.svg';
import resourcefulSvg from '../assets/images/home/illustration-resourceful.svg';
const HomeFeatureDiv = styled.div`
    width: 100%;
    height: 139.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2.4rem;
    margin-bottom: 31.1rem;

    @media screen and (min-width: 768px) {
        max-width: 111rem;
        padding: 0 3.9rem;
        height: 67rem;
    }
    @media screen and (min-width: 1440px) {
        padding: 0;
        height: 41.2rem;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
    }
`;

const HomeFeatureSection = styled.div`
    width: 100%;
    height: 41.2rem;
    color: var(--dark-grey-color);
    text-align: center;

    .home-feature-img-container {
        width: 20.2rem;
        height: 20.2rem;
        margin: 0 auto;
        position: relative;
    }
    .home-feature-img-container::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.2;
        border-radius: 50%;
        background: linear-gradient(
            90deg,
            rgba(93, 2, 2, 0.5),
            rgba(93, 2, 2, 0.0001)
        );
    }
    &:nth-child(2) .home-feature-img-container::before {
        transform: rotate(-90deg);
    }
    &:nth-child(3) .home-feature-img-container::before {
        transform: rotate(90deg);
    }
    img {
        width: 18.8rem;
        height: 16.2rem;
        margin-bottom: 6.8rem;
        z-index: 2;
    }
    h1 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;

        letter-spacing: 5px;
        margin-bottom: 3.2rem;
        text-transform: uppercase;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
    @media screen and (min-width: 768px) {
        height: 20.2rem;
        display: flex;
        flex-direction: column;
        /* align-content: space-between; */
        flex-wrap: wrap;

        .home-feature-img-container {
            margin: 0 4.8rem 0 0;
        }
        h1,
        p {
            width: 43.9rem;
            text-align: left;
        }
    }

    @media screen and (min-width: 1444px) {
        width: 35rem;
        height: 41.2rem;

        h1,
        p {
            width: 100%;
            text-align: center;
        }
    }
`;

const HomeFeature = () => {
    const homeSections = [
        {
            logo: passionateSvg,
            title: 'Passionate',
            content:
                'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
        },
        {
            logo: resourcefulSvg,
            title: 'Resourceful',
            content:
                'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
        },
        {
            logo: friendlySvg,
            title: 'Friendly',
            content:
                'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
        },
    ];

    const renderList = homeSections.map((item, idx) => {
        return (
            <HomeFeatureSection key={idx}>
                <div className="home-feature-img-container">
                    <img src={item.logo} alt={item.title}></img>
                </div>
                <h1> {item.title}</h1>
                <p> {item.content}</p>
            </HomeFeatureSection>
        );
    });

    return <HomeFeatureDiv>{renderList}</HomeFeatureDiv>;
};

export default HomeFeature;
