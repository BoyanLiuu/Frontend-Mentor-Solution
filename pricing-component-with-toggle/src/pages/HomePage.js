import { useState } from 'react';

import { GlobalStyle, Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from '../components/Heading';
import Card from '../components/Card';
import bgTop from '../assets/img/bg-top.svg';
import bgBottom from '../assets/img/bg-bottom.svg';
const StyledMainPageContainer = styled.div`
    background-image: url(${bgTop}), url(${bgBottom});
    background-repeat: no-repeat;
    background-position: top right, bottom left;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 1440px) {
        width: 100%;
        .card-container {
            height: 50.1rem;
            width: 105rem;
            display: flex;
            align-items: center;
        }
        .card-1 {
            height: 100%;
        }
    }
`;

function HomePage() {
    const data = [
        {
            type: 'Basic',
            price: '19.99',
            list: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
            bgColor: 'white',
            newPrice: '199.99',
        },
        {
            type: 'Professional',
            price: '24.99',
            list: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
            bgColor: 'blue',
            newPrice: '249.99',
        },
        {
            type: 'Basic',
            price: '39.99',
            list: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
            bgColor: 'white',
            newPrice: '399.99',
        },
    ];
    const [list, setList] = useState(data);
    const handleToggle = () => {
        let newList = JSON.parse(JSON.stringify(list));
        for (let x of newList) {
            let temp = x.price;
            x.price = x.newPrice;
            x.newPrice = temp;
        }

        setList(newList);
    };

    // create list of card
    const renderedListItems = list.map((card, index) => {
        return <Card key={index} cardInfo={card} className={`card-${index}`} />;
    });

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <StyledMainPageContainer>
                <Header handleToggle={handleToggle} />
                <div className="card-container">{renderedListItems}</div>
            </StyledMainPageContainer>
        </ThemeProvider>
    );
}

export default HomePage;
