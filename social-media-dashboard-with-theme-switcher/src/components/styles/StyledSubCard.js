import styled from 'styled-components';

export const StyledSubCardContainer = styled.div`
    background-color: hsl(227, 47%, 96%);
    border-radius: 0.5rem;
    height: 12.5rem;
    padding: 2.7rem 3rem 0 2.5rem;
    margin-bottom: 1.6rem;
    .title {
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 700;
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
        color: hsl(230, 17%, 14%);
    }
    .direction-icon {
        vertical-align: middle;
    }
    .differnce-container {
        position: absolute;
        right: 0;
        bottom: 5px;
    }
`;
