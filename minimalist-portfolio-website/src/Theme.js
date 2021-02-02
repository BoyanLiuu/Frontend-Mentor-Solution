import { createGlobalStyle } from 'styled-components';
// 333136 -->--dark-grey-color
export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --heading-font-family:'Ibarra Real Nova', serif;
        --body-font-family:'Public Sans', sans-serif;
        --slightly-desaturated-cyan-color:hsl(167, 36%, 54%);
        --dark-blue-color:hsl(205, 41%, 21%);
        --grayish-dark-blue-color:hsl(245, 10%, 22%);
        --light-gray-bg-color:hsl(0, 0%, 98%);
        --light-grey-text-field-color:hsl(240, 2%, 92%);
        --bright-red-error-color:hsl(0, 90%, 57%);
        

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
        font-family: 'Jost', sans-serif;
        animation: fadeIn ease 1s;
    }



    .phone-hero-text{
        font-size: 3.2rem;

        line-height: 3.6rem;
        font-weight: 500;
    }
    .phone-hero-subtext{
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.5rem;
    }
    .link-btn{
        text-align: center;
        width: 15.2rem;
        display: block;
        font-size: 1.5rem;
        font-weight:500;
        line-height: 2.2rem;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 0.8rem;
        padding: 1.7rem 0;
        transition: 0.2s background-color ease-in-out;
    }
    .link-btn:hover{
        color: var(--white-color);
        background-color: var(--light-peach-color);
    }


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    a{
        text-decoration:none;
    }

`;
