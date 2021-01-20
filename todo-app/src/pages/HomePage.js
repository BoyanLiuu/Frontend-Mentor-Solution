import { useState } from 'react';
import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
// import BottomSection from '../elements/BottomSection';

import { GlobalStyle, lightTheme, darkTheme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import bgLightMobile from '../assets/img/bg-mobile-light.jpg';
import bgDarkMobile from '../assets/img/bg-mobile-dark.jpg';

import bgLightDesktop from '../assets/img/bg-desktop-light.jpg';
import bgDarkDesktop from '../assets/img/bg-desktop-dark.jpg';

const StyledMainPageContainer = styled.div`
    position: absolute;
    width: 32.7rem;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 4.8rem 0 7.2rem 0;
`;

const TopImage = styled.div`
    height: 20rem;
    background-image: ${(props) =>
        props.theme.flag ? `url(${bgLightMobile})` : `url(${bgDarkMobile})`};
    background-repeat: no-repeat;
    background-size: cover;
`;

function HomePage() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    // const logo = require(`../misc/img/icon-${svgName}.svg`).default;

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <TopImage />
            <StyledMainPageContainer>
                <Header name={theme === 'light' ? 'icon-moon' : 'icon-sun'} />
                <TodoList />
            </StyledMainPageContainer>
        </ThemeProvider>
    );
}

export default HomePage;
