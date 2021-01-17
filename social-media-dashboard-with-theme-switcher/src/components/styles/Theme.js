import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bgColor: 'hsl(0, 0%, 100%)',
    topBgPattern: ' hsl(225, 100%, 98%)',
    cardBg: ' hsl(227, 47%, 96%)',
    subText: 'hsl(228, 12%, 44%)',
    mainText: 'hsl(230, 17%, 14%)',
    hrColor: '#848bab',
    togglerColor: 'hsl(230, 22%, 74%)',
};

export const darkTheme = {
    bgColor: 'hsl(230, 17%, 14%)',
    topBgPattern: ' hsl(232, 19%, 15%)',
    cardBg: '  hsl(228, 28%, 20%)',
    subText: 'hsl(228, 34%, 66%)',
    mainText: 'hsl(0, 0%, 100%)',
    hrColor: '#333a55',
    togglerColor:
        'linear-gradient(225deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
};

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;

        font-size: 62.5%;
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        animation: fadeIn ease 1s;
        transition: all 750ms !important;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
