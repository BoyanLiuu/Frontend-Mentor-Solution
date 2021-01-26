import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;

        font-size: 62.5%;
        --transition: 300ms ease-in-out;
        
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
        font-family: 'Bai Jamjuree', sans-serif;
    }


    .download-btn-container {
        display: flex;
        flex-direction: column;
    }
    .download-btn-container button {
        height: 5.6rem;
        border-radius: 2.8rem;
        border: none;
        outline: none;
        color: white;
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 3rem;
        cursor:pointer;
        transition:  var(--transition) transform;
    }
    .download-btn-container button:hover{
        transform: translateY(-2px);
    }
    .ios-btn {
        background-color: hsl(171, 66%, 44%);
        margin-bottom: 2.4rem;
        box-shadow: 0px 10px 20px rgba(137, 229, 199, 0.5);
    }
    .ios-btn:hover{
        background-color: hsla(171, 66%, 44%,0.7);
    }
    .mac-btn {
        background-color: hsl(233, 100%, 69%);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }
    .mac-btn:hover {
        background-color: hsla(233, 100%, 69%,0.7);

    }

    @media screen and (min-width: 700px) {
        .download-btn-container {
            flex-direction: row;
            justify-content: space-between;
            width:47rem;
            margin:0 auto;
            
        }

        .download-btn-container button {
            width:22.7rem;
        }

    }
`;
