import styled from 'styled-components';
import Card from './Card';
const CardsDiv = styled.div`
    padding: 0 2.4rem;
    margin: 0 auto;

    .title-container {
        margin-bottom: 4.8rem;
    }
    button:nth-child(2) {
        display: none;
    }
    .see-all-btn {
        width: 15.7rem;
        height: 4rem;
        background: white;
        font-family: 'Alata', sans-serif;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.4rem;
        letter-spacing: 0.5rem;
        cursor: pointer;
        outline: none;
    }
    .see-all-btn:hover {
        background: black;
        color: white;
    }
    button:nth-child(3) {
        display: block;
        margin: 3.4rem auto 9.6rem;
    }
    .title-container h3 {
        text-align: center;
        font-size: ${(prop) => prop.theme.mediumFont};
        font-weight: 300;
        line-height: 3.2rem;
        text-transform: uppercase;
    }

    .creation-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        row-gap: 2.4rem;
    }

    @media screen and (min-width: 950px) {
        width: 80rem;
        .creation-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;

            margin-bottom: 18.4rem;
        }
        button:nth-child(2) {
            display: block;
        }
        .title-container {
            display: flex;
            justify-content: space-between;
        }
        .title-container h3 {
            font-size: ${(prop) => prop.theme.xlargeFont};
            line-height: 4.8rem;
        }

        button:nth-child(3) {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 100rem;
        .creation-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
    }

    @media screen and (min-width: 1400px) {
        width: 111.4rem;
        .creation-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }
    }
`;

const CardSection = () => {
    const cardList = [
        {
            img: 'deep-earth',
            text: 'Deep Earth',
            mobileWidth: '7.9rem',
            desktopWidth: '10.6rem',
        },

        {
            img: 'night-arcade',
            text: 'Night Arcade',
            mobileWidth: '9.9rem',
            desktopWidth: '13.2rem',
        },
        {
            img: 'soccer-team',
            text: 'Soccer Team Vr',
            mobileWidth: '10.8rem',
            desktopWidth: '14.3rem',
        },
        {
            img: 'grid',
            text: 'The Grid',
            mobileWidth: '5.7rem',
            desktopWidth: '7.6rem',
        },
        {
            img: 'from-above',
            text: 'From Up Above Vr',
            mobileWidth: '12.3rem',
            desktopWidth: '16.5rem',
        },
        {
            img: 'pocket-borealis',
            text: 'Pocket Borealis',
            mobileWidth: '11.7rem',
            desktopWidth: '15.6rem',
        },
        {
            img: 'curiosity',
            text: 'The Curiosity',
            mobileWidth: '12.6rem',
            desktopWidth: '16.8rem',
        },
        {
            img: 'fisheye',
            text: 'Make it Fisheye',
            mobileWidth: '9.9rem',
            desktopWidth: '13.2rem',
        },
    ];

    const renderCard = cardList.map((item, index) => {
        return <Card item={item} key={index} className={`card-${index}`} />;
    });
    return (
        <CardsDiv>
            <div className="title-container">
                <h3> Our Creations</h3>
                <button className="see-all-btn"> See All</button>
            </div>

            <div className="creation-container">{renderCard}</div>
            <button className="see-all-btn"> See All</button>
        </CardsDiv>
    );
};

export default CardSection;
