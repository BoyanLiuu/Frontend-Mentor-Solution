import React from 'react';
import heritage from '../assets/images/about/desktop/image-heritage.jpg';

const OurHeritage = () => (
    <div className="heritage">
        <div className="heritage__textbox">
            <hr className="heritage__textbox--line" />
            <h2 className="heritage__textbox--heading">Our Heritage</h2>
            <div className="heritage__textbox--subheading">
                <p className="heritage__textbox--subheading--paragraph">
                    Founded in 2007, we started as a trio of architects. Our
                    complimentary skills and relentless attention to detail
                    turned Arch into one of the most sought after boutique firms
                    in the country.
                </p>
                <p className="heritage__textbox--subheading--paragraph">
                    Speciliazing in Urban Design allowed us to focus on creating
                    exceptional structures that live in harmony with their
                    surroundings. We consider every detail from every
                    surrounding element to inform our designs.
                </p>
                <p className="heritage__textbox--subheading--paragraph">
                    Our small team of world-class professionals provides input
                    on every project.
                </p>
            </div>
        </div>
        <div className="heritage__image__container">
            <img className="heritage__image" src={heritage} alt="" />
        </div>
    </div>
);

export default OurHeritage;
