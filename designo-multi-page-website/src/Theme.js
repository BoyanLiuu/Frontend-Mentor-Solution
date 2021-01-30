import { createGlobalStyle } from 'styled-components';
// 333136 -->--dark-grey-color
export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --transition: 300ms ease-in-out;
        --body-text:1.6rem;
        --peach-color:hsl(11,73%,66%);
        --black-color:hsl(270,3%,11%);
        --white-color:hsl(0,0%,100%);
        --light-peach-color:hsl(11,100%,80%);
        --dark-grey-color:hsl(264,5%,20%);
        --light-grey-color:hsl(210,17%,95%); 
        --extra-light-peach-color:  hsl(14,76%,97%)
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
    }
    .cursor-true{
        cursor: pointer;
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
        z-index: 2;
    }
    .link-btn:hover{
        color: var(--white-color);
        background-color: var(--light-peach-color);
    }
    .flex-col-vh-center{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }




`;
