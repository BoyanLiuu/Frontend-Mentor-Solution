import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import Header from '../components/Header';
import InfoSection from '../components/Info';
import Footer from '../components/Footer';
const StyledMainPageContainer = styled.div``;

function HomePage() {
    return (
        <StyledMainPageContainer>
            <GlobalStyle />
            <Header />
            <InfoSection />
            <Footer />
        </StyledMainPageContainer>
    );
}

export default HomePage;
