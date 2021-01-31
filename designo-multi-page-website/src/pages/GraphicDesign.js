/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import { useEffect } from 'react';

import Header from '../components/Header';
import DesignBanner from '../components/DesignBanner';
import DesignCard from '../components/DesignCard';
import DesignView from '../components/DesignView';
import Footer from '../components/Footer';
import bgPattern from '../assets/images/shared/desktop/bg-pattern-leaf.svg';
const StyledGraphicDesignPageContainer = styled.div`
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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

    @media screen and (min-width: 768px) {
        .desing-view-container {
            width: 68.9rem;
            height: 42.4rem;
            margin-bottom: 38.4rem;
        }

        .design-cards {
            height: 100.4rem;
        }
    }

    @media screen and (min-width: 1444px) {
        main {
            background-image: url(${bgPattern});
            background-repeat: no-repeat;
            background-position: 0 47.5rem;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        .design-cards {
            width: 111.1rem;
            height: 47.8rem;
            flex-wrap: wrap;
            flex-direction: row;
        }
        .desing-view-container {
            width: 111.1rem;
            height: 30.8rem;
            flex-direction: row;
            margin-bottom: 31.1rem;
        }
    }
`;
function GraphicDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
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
                home="false"
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
                    bgName="graphic-design"
                />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="desing-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledGraphicDesignPageContainer>
    );
}

export default GraphicDesign;
