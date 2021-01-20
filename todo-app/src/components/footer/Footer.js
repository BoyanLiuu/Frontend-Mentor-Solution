import styled from 'styled-components';
import React, { useState } from 'react';

const Btn = styled.button`
    font-size: 1.4rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: ${(props) =>
        props.active
            ? props.theme.typeHighlightColor
            : props.theme.toDoSubColor};
    transition: all 700ms;
    margin-right: 2rem;
`;

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 4.8rem;
    background-color: ${(props) => props.theme.todoBgColor};
    transition: all 700ms;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    button:last-of-type {
        margin-right: 0;
    }
`;

const Footer = () => {
    const [curFilter, setFilter] = useState('All');
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
    return (
        <FooterContainer test="blue">
            <Btn
                aria-label="All"
                value="All"
                className="filter-option "
                onClick={handleFilterChange}
                active={curFilter === 'All' ? 'true' : ''}>
                All
            </Btn>
            <Btn
                aria-label="Active"
                value="Active"
                className="filter-option "
                onClick={handleFilterChange}
                active={curFilter === 'Active' ? 'true' : ''}>
                Active
            </Btn>
            <Btn
                aria-label="Completed"
                value="Completed"
                className="filter-option "
                onClick={handleFilterChange}
                active={curFilter === 'Completed' ? 'true' : ''}>
                Completed
            </Btn>
        </FooterContainer>
    );
};

export default Footer;
