import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusFilters, statusFilterChanged } from './footerSlice';

// styledComponent
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
    box-shadow: ${(props) =>
        props.theme.flag
            ? `0px 35px 50px -15px rgba(194, 195, 214, 0.5)`
            : `0px 35px 50px -15px rgba(0,0,0,0.5);`};
    button:last-of-type {
        margin-right: 0;
    }
`;

// function component
const Footer = () => {
    const [curFilter, setFilter] = useState('All');
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        //track active btn
        setFilter(e.target.value);

        dispatch(statusFilterChanged(e.target.value));
    };
    //loop through status filters and create button group
    const filterBtns = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key];
        const active = curFilter === value ? 'true' : '';
        return (
            <Btn
                key={value}
                aria-label={value}
                value={value}
                className="filter-option "
                onClick={handleFilterChange}
                active={active}>
                {value}
            </Btn>
        );
    });

    return <FooterContainer test="blue">{filterBtns}</FooterContainer>;
};

export default Footer;
