import { useState, useEffect } from 'react';

import { GlobalStyle, Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from '../components/Heading';
import Card from '../components/Card';
const StyledMainPageContainer = styled.div``;

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
        return <Card key={index} cardInfo={card} />;
    });

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header handleToggle={handleToggle} />
            {renderedListItems}
        </ThemeProvider>
    );
}

export default HomePage;
