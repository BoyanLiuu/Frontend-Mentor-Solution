import React, { useContext } from 'react';
import { ResizeContext } from '../context/resize';
import arrow from '../assets/images/icons/icon-arrow-dark.svg';
import { officeInfo as data } from './../assets/data/data';
const ContactDetails = () => {
    const { viewport } = useContext(ResizeContext),
        map = 'image-map.png';

    const renderList = data.map((item, idx) => {
        return (
            <div key={idx} className="contact__details__location">
                <address>
                    <h5 className="contact__details__office-heading">
                        {item.name}
                    </h5>
                    <ul className="contact__details__list">
                        <li>
                            <span className="contact__details__list__title mail">
                                Mail:
                            </span>
                            <span>{item.mail}</span>
                        </li>
                        <li>
                            <span className="contact__details__list__title address">
                                Address:
                            </span>
                            <span>{item.address}</span>
                        </li>
                        <li>
                            <span className="contact__details__list__title phone">
                                Phone:
                            </span>
                            <span>{item.phone}</span>
                        </li>
                    </ul>
                </address>
                <a className="contact__details__redirect" href="#map">
                    <span>View on Map</span>
                    <img
                        className="contact__details__arrow"
                        src={arrow}
                        alt="redirect arrow"
                    />
                </a>
            </div>
        );
    });

    return (
        <div className="contact__details">
            <div className="contact__details__line" />
            <div className="contact__details__info">
                <h2 className="contact__details__heading">Contact Details</h2>
                <div className="contact__details__info-locations">
                    {renderList}
                </div>
            </div>
            <div className="contact__details__map__container" id="map">
                <img
                    className="contact__details__map"
                    src={
                        viewport > 800
                            ? require(`../assets/images/contact/desktop/` + map)
                            : viewport > 500
                            ? require(`../assets/images/contact/tablet/` + map)
                            : require(`../assets/images/contact/mobile/` + map)
                    }
                    alt="Map showing locations of Arch Studio offices"
                />
            </div>
        </div>
    );
};

export default ContactDetails;
