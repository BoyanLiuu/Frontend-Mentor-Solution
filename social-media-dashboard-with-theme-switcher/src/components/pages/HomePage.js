import { useState } from 'react';
import Header from '../elements/Header';
import TopSection from '../elements/TopSection';
import BottomSection from '../elements/BottomSection';

import { StyledHomePageContainer } from '../styles/StyledHomePage';
import { GlobalStyle, lightTheme, darkTheme } from '../styles/Theme';

import { ThemeProvider } from 'styled-components';

function HomePage() {
    const [theme, setTheme] = useState('light');
    // we just need to pass the function to Header component and fire up it when we toggle check box in header
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <StyledHomePageContainer>
                <Header toggle={themeToggler} />
                <TopSection />
                <BottomSection />
            </StyledHomePageContainer>
        </ThemeProvider>
    );
}

export default HomePage;
