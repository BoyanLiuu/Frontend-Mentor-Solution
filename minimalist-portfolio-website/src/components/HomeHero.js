/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';

const HomeFeatureDiv = styled.div`
    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1444px) {
    }
`;

const HomeFeature = () => {
    return (
        <HomeFeatureDiv>
            <div className="inner-container"></div>
        </HomeFeatureDiv>
    );
};

export default HomeFeature;
