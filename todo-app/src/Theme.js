import { createGlobalStyle } from 'styled-components';
export const lightTheme = {
    checkBtnColor: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    typeHighlightColor: 'hsl(220, 98%, 61%)',
    bgColor: 'hsl(0, 0%, 98%)',
    todoBgColor: '#ffffff',
    toDoSubColor: 'hsl(236, 9%, 61%)',
    circleBorderColor: 'hsl(236, 33%, 92%)',
    toDoinActiveColor: 'hsl(233, 11%, 84%)',
    toDoActiveColor: 'hsl(235, 19%, 35%)',
    toDoInputTextColor: 'hsl(236, 9%, 61%)',
    removeBtnColor: ' #494c6b',
    flag: true,
};

export const darkTheme = {
    checkBtnColor: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    typeHighlightColor: 'hsl(220, 98%, 61%)',
    bgColor: 'hsl(235, 21%, 11%)',
    todoBgColor: 'hsl(235, 24%, 19%)',
    toDoInputTextColor: 'hsl(234, 11%, 52%)',
    circleBorderColor: ' hsl(237, 14%, 26%)',
    toDoinActiveColor: 'hsl(233, 14%, 35%)',
    toDoActiveColor: 'hsl(234, 39%, 85%)',
    toDoSubColor: '#5B5E7E',
    removeBtnColor: ' #494c6b',
    flag: false,
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
        height: 100vh;
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Josefin Sans', sans-serif;
    }

`;
