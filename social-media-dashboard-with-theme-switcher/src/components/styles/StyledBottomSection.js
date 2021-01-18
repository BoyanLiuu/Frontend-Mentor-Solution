import styled from 'styled-components';

export const StyledBottomSection = styled.div`
    width: 32.7rem;
    margin-top: 4.6rem;

    .bottom-title {
        font-size: 2.4rem;
        line-height: 2.9rem;
        font-weight: 700;
        color: ${(props) => props.theme.mainText};
        margin-bottom: 2.7rem;
    }

    @media only screen and (min-width: 640px) and (max-width: 1200px) {
        width: 100%;
        .card-section-container {
            display: grid;
            grid-template-columns: auto auto;
            gap: 2.4rem 2.4rem;
        }
    }
    @media screen and (min-width: 1200px) {
        .card-section-container {
            display: grid;
            grid-template-columns: repeat(4, 25.5rem);
            grid-template-rows: 12.5rem 12.5rem;
            gap: 2.4rem 3rem;
        }
    }
`;
