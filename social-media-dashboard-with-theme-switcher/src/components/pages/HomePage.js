import Header from '../elements/Header';
import TopSection from '../elements/TopSection';
import BottomSection from '../elements/BottomSection';
import { StyledHomePageContainer } from '../styles/StyledHomePage';

function HomePage() {
    return (
        <StyledHomePageContainer>
            <Header />
            <TopSection />
            <BottomSection />
        </StyledHomePageContainer>
    );
}

export default HomePage;
