import styled from 'styled-components';

const CardContainer = styled.div`
    width: 32.7rem;
    height: 45.3rem;
    margin: 0 auto 3.2rem auto;
    padding: 3.1rem 2.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(prop) =>
        prop.bgColor === 'white' ? 'white' : prop.theme.gradientColor};
    border-radius: 1rem;
    box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);

    .type {
        font-size: ${(prop) => prop.theme.smallFont};
        line-height: 2.8rem;
        color: ${(prop) =>
            prop.bgColor === 'white' ? prop.theme.mainTextColor : 'white'};
        margin-bottom: 2.5rem;
    }
    .price {
        font-size: ${(prop) => prop.theme.largeFont};
        line-height: 7.1rem;

        color: ${(prop) =>
            prop.bgColor === 'white' ? prop.theme.titleTextColor : 'white'};
        margin-bottom: 2.5rem;
        display: flex;
        align-items: center;
    }
    .dollar-sign {
        font-size: 4rem;
        line-height: 4.9rem;
        margin-right: 0.7rem;
    }
    .list-container {
        width: 100%;
    }
    .list-item {
        width: 100%;
        font-size: ${(prop) => prop.theme.xsmallFont};
        color: ${(prop) =>
            prop.bgColor === 'white' ? prop.theme.mainTextColor : 'white'};
        line-height: 2.8rem;
        list-style: none;
        padding: 1.3rem 0;
        border-bottom: 1px solid ${(prop) => prop.theme.dividerColor};
        text-align: center;
    }

    .learn-more-btn {
        border-radius: 0.6rem;
        margin-top: 3.2rem;
        width: 100%;
        height: 4.4rem;
        font-size: 1.3rem;
        letter-spacing: 1.393px;
        line-height: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        background: ${(prop) =>
            prop.bgColor === 'white' ? prop.theme.gradientColor : 'white'};
        color: ${(prop) =>
            prop.bgColor === 'white' ? 'white' : prop.theme.btnTextColor};
        border: none;
        outline: none;
    }

    @media screen and (min-width: 1440px) {
        margin: 0;
    }
`;

const Card = ({ cardInfo, className }) => {
    const { type, price, bgColor, list } = cardInfo;

    const listItem = list.map((item, idx) => {
        return (
            <li key={idx} className="list-item">
                {item}
            </li>
        );
    });

    return (
        <CardContainer bgColor={bgColor} className={className}>
            <h3 className="type">{type}</h3>
            <h3 className="price">
                <span className="dollar-sign">$</span>
                {price}
            </h3>
            <ul className="list-container">{listItem}</ul>
            <button className="learn-more-btn">Learn More</button>
        </CardContainer>
    );
};

export default Card;
