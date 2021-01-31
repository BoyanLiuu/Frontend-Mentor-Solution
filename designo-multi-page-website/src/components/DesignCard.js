/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';

const StyledDesignCardContainer = styled.div`
    width: 32.7rem;
    height: 47.8rem;
    border-radius: 1.5rem;
    background-color: var(--extra-light-peach-color);
    transition: 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        transform: scale(1.02);
        background-color: var(--peach-color);
    }
    cursor: pointer;
    .design-img {
        width: 100%;
        height: 32rem;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
    }
    .design-card-desc {
        width: 26.8rem;
        height: 9.4rem;
        text-align: center;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3 {
        color: var(--peach-color);
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.6rem;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
    }
    &:hover h3,
    &:hover p {
        color: white;
        transition: 0.2s ease-in-out;
    }
    p {
        color: var(--dark-grey-color);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.6rem;
    }
    @media screen and (min-width: 768px) {
        width: 69rem;
        height: 31rem;
        flex-direction: row;

        .design-img {
            width: 33.8rem;
            height: 100%;
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 0;
            border-bottom-left-radius: 1.5rem;
        }
        .design-card-desc {
            margin-top: 0;
            margin-left: 3.1rem;
        }
    }

    @media screen and (min-width: 1444px) {
        width: 35rem;
        height: 47.8rem;
        flex-direction: column;
        .design-img {
            width: 100%;
            height: 32rem;

            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
            border-bottom-left-radius: 0;
        }

        .design-card-desc {
            margin-top: 3.1rem;
            margin-left: 0;
        }
    }
`;

const DesignBanner = ({ design, title, desc, fileName, className }) => {
    const curImg = require(`../assets/images/${design}/desktop/image-${fileName}.jpg`)
        .default;
    return (
        <StyledDesignCardContainer className={className}>
            <img src={curImg} alt="title" className="design-img" />
            <div className="design-card-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </StyledDesignCardContainer>
    );
};

export default DesignBanner;
