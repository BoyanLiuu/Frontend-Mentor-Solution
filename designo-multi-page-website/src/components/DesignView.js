/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import arrow from '../assets/images/shared/icon-right-arrow.svg';
const DesignViewDiv = styled.div`
    color: white;
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-image: url(${(prop) => prop.mobilLogo});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1.5rem;
        position: absolute;

        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        background: rgba(231, 129, 107, 0.8);
    }
    h1 {
        z-index: 1;
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 3.6rem;
        letter-spacing: 1.4px;
        margin-bottom: 1.013rem;
        text-transform: uppercase;
    }

    h3 {
        width: 197px;
        z-index: 1;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.2rem;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        position: relative;
    }

    h3::after {
        z-index: 1;
        content: '';
        position: absolute;
        background-image: url(${arrow});

        width: 6px;
        height: 10px;

        right: 0px;
        bottom: 6px;
    }
`;

const DesignView = ({ title, svgName, width, height }) => {
    const mobilLogo = require(`../assets/images/home/mobile/image-${svgName}-design.jpg`)
        .default;
    const tabletLogo = require(`../assets/images/home/tablet/image-${svgName}-design.jpg`)
        .default;
    let desktopLogo;
    if (svgName !== 'web')
        desktopLogo = require(`../assets/images/home/desktop/image-${svgName}-design.jpg`)
            .default;
    else {
        svgName = height === '64rem' ? 'web-design-large' : 'web-design-small';
        desktopLogo = require(`../assets/images/home/desktop/image-${svgName}.jpg`)
            .default;
    }

    return (
        <DesignViewDiv
            mobilLogo={mobilLogo}
            tabletLogo={tabletLogo}
            desktopLogo={desktopLogo}
            width={width}
            height={height}>
            <h1>{title}</h1>
            <h3>View Projects</h3>
        </DesignViewDiv>
    );
};

export default DesignView;
