import React, { useState, useEffect, useRef, useContext } from 'react';
import { ResizeContext } from '../context/resize';
import { Link } from 'react-router-dom';

import arrow from '../assets/images/icons/icon-arrow.svg';
import { hero as data } from './../assets/data/data.js';

const HomePageHero = () => {
    const { viewport } = useContext(ResizeContext);

    const [current, setCurrent] = useState(0),
        picEl = useRef();
    useEffect(() => {
        picEl.current.classList.add('active--timer');

        const timeoutID = setTimeout(() => {
            current < 3 ? setCurrent(current + 1) : setCurrent(0);
            picEl.current.classList.remove('active--timer');
            picEl.current.classList.remove('active--click');
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, [current]);

    const activeClick = () => {
        picEl.current.classList.remove('active--timer');
        picEl.current.classList.add('active--click');
    };
    const idList = data.map((item, i) => (
        <button
            className={`pagination__btn ${i === current && 'active'}`}
            onClick={() => setCurrent(i)}
            key={i}>
            {item.id}
        </button>
    ));
    const heroImg = require(`./../assets/images/home/${viewport}/${data[current].picture}.jpg`);
    return (
        <div className="homepage__hero">
            <div className="homepage__hero--backdrop">
                <img
                    src={heroImg}
                    ref={picEl}
                    alt={`${data[current].title} porfolio preview`}
                />
            </div>
            <div className="homepage__hero__textbox">
                <h2>{data[current].title}</h2>
                <p>{data[current].desc}</p>
                <Link to="/portfolio" className="link-btn">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>
            <div className="homepage__hero--pagination" onClick={activeClick}>
                {idList}
            </div>
        </div>
    );
};

export default HomePageHero;
