/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';

import { useEffect } from 'react';

import Header from '../components/Header';

function PortfolioDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <GlobalStyle />
            <main>
                <Header />
            </main>
        </div>
    );
}

export default PortfolioDetail;
