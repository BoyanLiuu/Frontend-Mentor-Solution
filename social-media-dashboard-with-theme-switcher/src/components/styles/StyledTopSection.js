import styled from 'styled-components';

export const StyledTopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1110px) {
        flex-direction: row;
    }
`;
