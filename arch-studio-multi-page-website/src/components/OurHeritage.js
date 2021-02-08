import React from 'react';
import heritage from '../assets/images/about/desktop/image-heritage.jpg';

const OurHeritage = () => (
    <div className="heritage">
        <div className="heritage__textbox">
            <div className="heritage__textbox--line" />
            <h2 className="heritage__textbox--heading">
                Our <br />
                Heritage
            </h2>
            <div className="heritage__textbox--subheading">
                <p>
                    Founded in 2007, we started as a trio of architects. Our
                    complimentary skills and relentless attention to detail
                    turned Arch into one of the most sought after boutique firms
                    in the country.
                </p>
                <p>
                    Speciliazing in Urban Design allowed us to focus on creating
                    exceptional structures that live in harmony with their
                    surroundings. We consider every detail from every
                    surrounding element to inform our designs.
                </p>
                <p>
                    Our small team of world-class professionals provides input
                    on every project.
                </p>
            </div>
        </div>

        <img className="heritage__image" src={heritage} alt="heritage" />
    </div>
);

export default OurHeritage;
