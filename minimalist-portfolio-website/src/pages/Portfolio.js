/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';

import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <GlobalStyle />
            <main></main>
        </div>
    );
}

export default About;
