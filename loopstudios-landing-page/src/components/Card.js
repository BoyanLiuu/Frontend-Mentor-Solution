import styled from 'styled-components';

const CardContainer = styled.div`
    .card {
        background: url(${(prop) => prop.srcMobile});

        background-size: cover;

        height: 12rem;
        position: relative;
        cursor: pointer;
    }

    .card h3 {
        position: absolute;
        z-index: 1;
        left: 2rem;
        top: 5.2rem;
        width: ${(prop) => prop.mobileWidth};
        height: 4.8rem;
        text-align: start;
        font-size: ${(prop) => prop.theme.smallFont};
        color: white;
        font-weight: 300;
        line-height: 2.4rem;
        text-transform: uppercase;
    }

    @media screen and (min-width: 550px) {
        .card {
            height: 25.6rem;
        }
    }

    @media screen and (min-width: 950px) {
        .card {
            background: url(${(prop) => prop.srcDesktop});
            background-size: cover;
            height: 45rem;
        }

        .card h3 {
            position: absolute;
            left: 4rem;
            top: 35.4rem;
            width: ${(prop) => prop.desktopWidth};
        }
    }
`;

const Card = ({ item, className }) => {
    const { img, text, mobileWidth, desktopWidth } = item;
    const mobilLogo = require(`../assets/img/mobile/image-${img}.jpg`).default;
    const desktopLogo = require(`../assets/img/desktop/image-${img}.jpg`)
        .default;
    return (
        <CardContainer
            className={className}
            srcMobile={mobilLogo}
            srcDesktop={desktopLogo}
            desktopWidth={desktopWidth}
            mobileWidth={mobileWidth}>
            <div className="card">
                <h3>{text}</h3>
            </div>
        </CardContainer>
    );
};

export default Card;
