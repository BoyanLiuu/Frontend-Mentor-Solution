import { GlobalStyle, Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from '../components/Header';
import InfoSection from '../components/Info';
import CardSection from '../components/Cards';
import Footer from '../components/Footer';
const StyledMainPageContainer = styled.div``;

function HomePage() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <StyledMainPageContainer>
                <Header />
                <InfoSection />
                <CardSection />
                <Footer />
            </StyledMainPageContainer>
        </ThemeProvider>
    );
}

export default HomePage;
