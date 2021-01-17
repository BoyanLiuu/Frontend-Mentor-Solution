import styled from 'styled-components';

export const StyledMainCardContainer = styled.div`
    //Light Grayish Blue (Card BG)
    background-color: ${(props) => props.theme.cardBg};
    border-radius: 0.5rem;
    width: 32.6rem;
    text-align: center;
    margin-bottom: 2.4rem;
    padding: 3.2rem 0 2.4rem 0;

    &.facebook {
        //facebook color
        border-top: 4px solid hsl(208, 92%, 53%);
    }
    &.twitter {
        //twitter color
        border-top: 4px solid hsl(203, 89%, 53%);
    }
    &.instagram {
        //instagram color
        position: relative;
    }

    &.instagram:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.4rem;
        background: linear-gradient(
            to left,
            hsl(37, 97%, 70%),
            hsl(329, 70%, 58%)
        );
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        top: -0.1rem;
        left: 0;
    }

    &.youtube {
        //youtube color
        border-top: 4px solid hsl(348, 97%, 39%);
    }

    img {
        padding-bottom: -1rem;
    }
    .top-section {
        display: flex;
        justify-content: center;
        margin-bottom: 2.8rem;
    }
    .name {
        margin-left: 0.8rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        align-self: flex-end;
        font-weight: 700;
        color: ${(props) => props.theme.subText};
    }
    .number-text {
        font-size: 5.6rem;
        line-height: 4.8rem;
        letter-spacing: -2px;
        margin-bottom: 0.9rem;
        color: ${(props) => props.theme.mainText};
    }
    .sub-text {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: 0.5rem;
        color: ${(props) => props.theme.subText};
        margin-bottom: 2.5rem;
    }
    .bottom-section {
        color: ${(props) =>
            props.flag ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.5rem;
    }
    .direction-icon {
        vertical-align: middle;
    }

    @media only screen and (min-width: 550px) and (max-width: 1100px) {
        width: 50vw;
    }

    @media screen and (min-width: 1110px) {
        width: 25.5rem;
        margin-right: 3rem;

        &.youtube {
            margin-right: 0;
        }
    }
`;
