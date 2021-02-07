import React, { useContext } from 'react';
import { ResizeContext } from '../context/resize';
import arrow from '../assets/images/icons/icon-arrow-dark.svg';

const ContactDetails = () => {
    const { viewport } = useContext(ResizeContext),
        map = 'image-map.png';

    return (
        <div className="contact__details">
            <hr className="contact__details__line" />
            <div className="contact__details__info">
                <h2 className="contact__details__info--heading">
                    Contact Details
                </h2>
                <div className="contact__details__info--locations">
                    <div className="contact__details__info--locations-main">
                        <address>
                            <h5 className="office__heading">Main Office</h5>
                            <ul className="office__info">
                                <li className="office__info--email">
                                    <span>Mail:</span>
                                    <span>archone@mail.com</span>
                                </li>
                                <li className="office__info--address">
                                    <span>Address:</span>
                                    <span>1892 Chenoweth Drive TN</span>
                                </li>
                                <li className="office__info--phone">
                                    <span>Phone:</span>
                                    <span>123-456-3451</span>
                                </li>
                            </ul>
                        </address>
                        <a
                            className="contact__details__info--locations--redirect"
                            href="#map">
                            <span>View on Map</span>
                            <img
                                className="redirect--arrow"
                                src={arrow}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="contact__details__info--locations-second">
                        <address>
                            <h5 className="office__heading">Office II</h5>
                            <ul className="office__info">
                                <li className="office__info--email">
                                    <span>Mail:</span>
                                    <span>archtwo@mail.com</span>
                                </li>
                                <li className="office__info--address">
                                    <span>Address:</span>
                                    <span>3399 Wines Lane TX</span>
                                </li>
                                <li className="office__info--phone">
                                    <span>Phone:</span>
                                    <span>832-123-4321</span>
                                </li>
                            </ul>
                        </address>
                        <a
                            className="contact__details__info--locations--redirect"
                            href="#map">
                            <span>View on Map</span>
                            <img
                                className="redirect--arrow"
                                src={arrow}
                                alt=""
                            />
                        </a>
                    </div>
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
