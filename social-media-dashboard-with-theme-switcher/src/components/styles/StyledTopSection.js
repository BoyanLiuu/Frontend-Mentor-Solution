import styled from 'styled-components';

export const StyledTopSectionContainer = styled.div`
    display: grid;

    grid-template-columns: auto;

    @media only screen and (min-width: 640px) and (max-width: 1200px) {
        grid-template-columns: auto auto;
        gap: 2.4rem 2.4rem;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 25.5rem);
        grid-column-gap: 3rem;
    }
`;
