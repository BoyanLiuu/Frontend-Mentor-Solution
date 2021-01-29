/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import icon from '../assets/images/logo-dark.png';

const StyledDesignBannerContainer = styled.div`
    width: 100%;
    height: 32rem;
    background-color: var(--peach-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10.5rem 2.4rem 8rem 2.4rem;
    text-align: center;
    margin-bottom: 9.6rem;

    .design-banner-text {
        color: white;
    }
    .design-banner-text h1 {
        margin-bottom: 2.4rem;
    }
`;

const DesignBanner = ({ title, content }) => {
    return (
        <StyledDesignBannerContainer>
            <div className="design-banner-text ">
                <h1 className="phone-hero-text">{title}</h1>
                <p className="phone-hero-subtext">{content}</p>
            </div>
            <span className="circle banner-circle-one "></span>
            <span className="circle banner-circle-two "></span>
            <span className="circle banner-circle-three "></span>
            <span className="circle banner-circle-four "></span>
            <span className="circle banner-circle-five"></span>
        </StyledDesignBannerContainer>
    );
};

export default DesignBanner;
