import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';

import { GlobalStyle, lightTheme, darkTheme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import bgLightMobile from '../assets/img/bg-mobile-light.jpg';
import bgDarkMobile from '../assets/img/bg-mobile-dark.jpg';

import bgLightDesktop from '../assets/img/bg-desktop-light.jpg';
import bgDarkDesktop from '../assets/img/bg-desktop-dark.jpg';

const StyledMainPageContainer = styled.div`
    width: 32.7rem;
    margin: -15.2rem auto 0 auto;
    padding-bottom: 3rem;
    @media screen and (min-width: 1400px) {
        width: 45rem;
    }
`;

const TopImage = styled.div`
    height: 20rem;
    background-image: ${(props) =>
        props.theme.flag ? `url(${bgLightMobile})` : `url(${bgDarkMobile})`};
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 1400px) {
        background-image: ${(props) =>
            props.theme.flag
                ? `url(${bgLightDesktop})`
                : `url(${bgDarkDesktop})`};
    }
`;

function HomePage() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    // only add transition style when page is loade
    useEffect(() => {
        document.body.style.transition = 'all 700ms';
        return () => (document.body.style.transition = 'none');
    }, []);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <TopImage />

            <StyledMainPageContainer>
                <Header
                    toggle={themeToggler}
                    name={theme === 'light' ? 'icon-moon' : 'icon-sun'}
                />
                <TodoList />
            </StyledMainPageContainer>
        </ThemeProvider>
    );
}

export default HomePage;
