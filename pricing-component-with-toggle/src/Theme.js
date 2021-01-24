import { createGlobalStyle } from 'styled-components';
export const Theme = {
    xsmallFont: '1.5rem',
    smallFont: '1.8rem',
    mediumFont: '3.2rem',
    largeFont: '7.2rem',
    gradientColor: 'linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
    bgColor: ' hsl(240, 78%, 98%)',
    btnTextColor: '#6d72de',
    mainTextColor: 'hsl(233, 13%, 49%)',
    dividerColor: 'hsla(233, 13%, 49%,0.25)',
    titleTextColor: 'hsl(232, 13%, 33%)',
    toggleTextColor: 'hsl(234, 14%, 74%)',
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
        background-color:  ${(props) => props.theme.bgColor};
        font-family: 'Montserrat', sans-serif;
    }

`;
