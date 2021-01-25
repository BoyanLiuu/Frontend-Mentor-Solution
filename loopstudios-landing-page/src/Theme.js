import { createGlobalStyle } from 'styled-components';
export const Theme = {
    xsmallFont: '1.5rem',
    smallFont: '2.4rem',
    mediumFont: '3.2rem',
    largeFont: '4rem',
    xlargeFont: '4.8rem',
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
        width:100%;
        font-family: 'Josefin Sans', sans-serif;
        
    }

    .link::after {
        content: '';
        pointer-events: none;
        position: absolute;
        bottom: -0.6rem;
        left: 50%;
        transform: translateX(-50%);
        width: 2.4rem;
        height: 0.2rem;
        background: #fff;
        opacity: 0;
    }

    .link:hover::after {
        opacity: 1;
    }

`;
