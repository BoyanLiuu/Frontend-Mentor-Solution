import React, { useContext } from 'react';
import { ResizeContext } from '../context/resize';

const SideHero = ({ heading, subheading, content }) => {
    const { viewport } = useContext(ResizeContext);
    let image = require(`../assets/images/${heading.toLowerCase()}/${viewport}/image-hero.jpg`);

    return (
        <div className="side-hero">
            <div className="side-hero__back-drop">
                <img
                    className="side-hero__image"
                    src={image}
                    alt="about hero"
                />
            </div>

            <div className="side-hero__textbox">
                <h1 className="side-hero__textbox--heading">{heading}</h1>
                <h2 className="side-hero__textbox--subheading">{subheading}</h2>
                <p className="side-hero__textbox--main-content">{content}</p>
            </div>
        </div>
    );
};

export default SideHero;
