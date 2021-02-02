/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledAboutPageContainer = styled.div`
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1444px) {
    }
`;
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <StyledAboutPageContainer>
            <GlobalStyle />
            <main></main>
        </StyledAboutPageContainer>
    );
}

export default About;
