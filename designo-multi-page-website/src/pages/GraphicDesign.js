/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';

import Header from '../components/Header';
import DesignBanner from '../components/DesignBanner';
import DesignCard from '../components/DesignCard';
import DesignView from '../components/DesignView';
import Footer from '../components/Footer';

const StyledGraphicDesignPageContainer = styled.div`
    .desing-view-container {
        height: 52.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 31.1rem;
    }
    .design-cards {
        height: 151.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 9.6rem;
    }
`;
function GraphicDesign() {
    const designViewData = [
        {
            title: 'web design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'web',
        },
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
        },
    ];
    const designCardData = [
        {
            design: 'graphic-design',
            title: 'tim brown',
            desc: 'A book cover designed for Tim Brown’s new release, ‘Change’',
            fileName: 'change',
        },
        {
            design: 'graphic-design',
            title: 'boxed water',
            desc: 'A simple packaging concept made for Boxed Water',
            fileName: 'boxed-water',
        },
        {
            design: 'graphic-design',
            title: 'science',
            desc: 'A poster made in collaboration with the Federal Art Project',
            fileName: 'science',
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
        <StyledGraphicDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner
                    title="Graphic Design"
                    content="We deliver eye-catching branding materials that are tailored to meet your business objectives."
                />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="desing-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledGraphicDesignPageContainer>
    );
}

export default GraphicDesign;
