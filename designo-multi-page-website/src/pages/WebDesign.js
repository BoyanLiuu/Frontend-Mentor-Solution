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

const StyledWebDesignPageContainer = styled.div`
    width: 100%;

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* overflow: hidden; */
    .desing-view-container {
        height: 52.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 31.1rem;
        transition: 0.2s ease-in-out;
    }
    .design-cards {
        height: 306.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 9.6rem;
        transition: 0.2s ease-in-out;
    }

    @media screen and (min-width: 768px) {
        .desing-view-container {
            width: 68.9rem;
            height: 42.4rem;
            margin-bottom: 38.4rem;
        }

        .design-cards {
            width: 68.9rem;
            height: 203rem;
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
            width: 111rem;
            height: 98.8rem;
            flex-wrap: wrap;
        }
        .desing-view-container {
            width: 111.1rem;
            height: 30.8rem;
            flex-direction: row;
        }
    }
`;
function WebDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const designViewData = [
        {
            title: 'app design',
            width: '32.7rem',
            height: '25rem',
            svgName: 'app',
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
            design: 'web-design',
            title: 'express',
            desc: 'A multi-carrier shipping website for ecommerce businesses',
            fileName: 'express',
        },
        {
            design: 'web-design',
            title: 'transfer',
            desc:
                'Site for low-cost money transfers and sending money within seconds',
            fileName: 'transfer',
        },
        {
            design: 'web-design',
            title: 'photon',
            desc:
                'A state-of-the-art music player with high-resolution audio and DSP effects',
            fileName: 'photon',
        },
        {
            design: 'web-design',
            title: 'builder',
            desc:
                'Connects users with local contractors based on their location',
            fileName: 'builder',
        },
        {
            design: 'web-design',
            title: 'blogr',
            desc:
                'Blogr is a platform for creating an online blog or publication',
            fileName: 'blogr',
        },
        {
            design: 'web-design',
            title: 'camp',
            desc:
                'Get expert training in coding, data, design, and digital marketing',
            fileName: 'camp',
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
        <StyledWebDesignPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <DesignBanner
                    title="Web Design"
                    content="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                    bgName="web-design"
                />

                <div className="design-cards">{renderDesignCards}</div>
                <div className="desing-view-container">{renderList}</div>

                <Footer />
            </main>
        </StyledWebDesignPageContainer>
    );
}

export default WebDesign;
