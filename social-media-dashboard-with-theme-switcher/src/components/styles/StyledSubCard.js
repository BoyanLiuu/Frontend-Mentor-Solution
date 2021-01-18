import styled from 'styled-components';

export const StyledSubCardContainer = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    border-radius: 0.5rem;
    height: 12.5rem;
    padding: 2.7rem 3rem 0 2.5rem;
    margin-bottom: 1.6rem;
    transition: all 300ms !important;

    .title {
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 700;
        color: ${(props) => props.theme.subText};
    }
    img {
        float: right;
    }
    .bottom-section {
        margin-top: 2.3rem;
    }

    .bottom-section {
        color: ${(props) =>
            props.flag ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.5rem;
        position: relative;
    }
    .number {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 3.9rem;
        color: ${(props) => props.theme.mainText};
    }
    .direction-icon {
        vertical-align: middle;
    }
    .differnce-container {
        position: absolute;
        right: 0;
        bottom: 5px;
    }

    @media only screen and (min-width: 640px) and (max-width: 1200px) {
        width: auto;
    }

    @media screen and (min-width: 1200px) {
        width: 25.5rem;
        margin-right: 3rem;
    }
`;
