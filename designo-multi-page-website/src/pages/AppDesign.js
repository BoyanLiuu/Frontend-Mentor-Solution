/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';

import Header from '../components/Header';
import DesignBanner from '../components/DesignBanner';
import DesignCard from '../components/DesignCard';
import DesignView from '../components/DesignView';
import Footer from '../components/Footer';

const StyledAppDesignPageContainer = styled.div`
    .desing-view-container {
        height: 52.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 31.1rem;
    }
    .design-cards {
        height: 255rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 9.6rem;
    }
`;
function AppDesign() {
    const designViewData = [
        {
            title: 'web design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'web',
        },
        {
            title: 'graphic design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'graphic',
        },
    ];
    const designCardData = [
        {
            design: 'app-design',
            title: 'airfilter',
            desc:
                'Solving the problem of poor indoor air quality by filtering the air',
            fileName: 'airfilter',
        },
        {
            design: 'app-design',
            title: 'eyecam',
            desc:
                'Product that lets you edit your favorite photos and videos at any time',
            fileName: 'eyecam',
        },
        {
            design: 'app-design',
            title: 'faceit',
            desc:
                'Get to meet your favorite internet superstar with the faceit app',
            fileName: 'faceit',
        },
        {
            design: 'app-design',
            title: 'todo',
            desc:
                'A todo app that features cloud sync with light and dark mode',
            fileName: 'todo',
        },
        {
            design: 'app-design',
            title: 'loopstudios',
            desc: 'A VR experience app made for Loopstudios',
            fileName: 'loopstudios',
        },
    ];
    const renderList = designViewData.map((item, idx) => {
        return (
            <DesignView
                key={idx}
                title={item.title}
                svgName={item.svgName}
                width={item.width}
                height={item.height}
            />
        );
    });

    const renderDesignCards = designCardData.map((item, idx) => {
        return (
            <DesignCard
                design={item.design}
                title={item.title}
                desc={item.desc}
                fileName={item.fileName}
                key={idx}
            />
        );
    });
    return (
        <StyledAppDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner
                    title="Web Design"
                    content="We build websites that serve as powerful marketing tools and bring memorable brand experiences.

                "
                />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="desing-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledAppDesignPageContainer>
    );
}

export default AppDesign;
