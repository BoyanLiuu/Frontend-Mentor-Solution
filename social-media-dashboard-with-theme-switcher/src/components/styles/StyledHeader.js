import styled from 'styled-components';

export const StyledHeader = styled.div`
    font-weight: 700;
    .title {
        font-size: 2.4rem;
        line-height: 2.9rem;
        //Very Dark Blue (Text)
        color: hsl(230, 17%, 14%);
    }

    .data-info,
    .dark-mode {
        font-size: 1.4rem;
        line-height: 1.7rem;
        // Dark Grayish Blue (Text)
        color: hsl(228, 12%, 44%);
    }
    .break-line {
        margin-bottom: 1.6rem;
        border-top: 1px solid #8a8bab;
    }
    .data-info {
        margin: 0.4rem 0 2.4rem 0;
    }
    .dark-mode-container {
        margin-bottom: 4rem;
    }
`;
