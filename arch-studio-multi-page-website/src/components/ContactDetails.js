import React, { useState } from 'react';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import iconOffice from './../assets/images/icons/icon-map-point.svg';
import arrow from '../assets/images/icons/icon-arrow-dark.svg';
import { officeInfo as data } from './../assets/data/data';
const ContactDetails = () => {
    const [goToOfficeId, setGoToOfficeId] = useState(null);

    function goToMapOffice(officeId) {
        setGoToOfficeId(officeId);
    }
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
                <div
                    className="contact__details__redirect"
                    href="#map"
                    onClick={() => goToMapOffice(item.id)}>
                    <span>View on Map</span>
                    <img
                        className="contact__details__arrow"
                        src={arrow}
                        alt="redirect arrow"
                    />
                </div>
            </div>
        );
    });

    //Map set up
    const PointsLayer = () => {
        return data.map((office) => (
            <PointMarker
                key={office.id}
                office={office}
                goToOffice={office.id === goToOfficeId}
            />
        ));
    };

    const PointMarker = ({ office, goToOffice }) => {
        const map = useMap();
        const icon = new Icon({
            iconUrl: iconOffice,
            iconSize: [40, 48],
        });
        if (goToOffice) {
            map.flyTo(office.coordinates, 15, { duration: 2 });
        }
        return (
            <Marker
                icon={icon}
                position={[office.coordinates[0], office.coordinates[1]]}>
                <Popup
                    position={[office.coordinates[0], office.coordinates[1]]}>
                    <div>
                        <h3>{office.name}</h3>
                    </div>
                </Popup>
            </Marker>
        );
    };
    return (
        <div className="contact__details">
            <div className="contact__details__line" />
            <div className="contact__details__info">
                <h2 className="contact__details__heading">Contact Details</h2>
                <div className="contact__details__info-locations">
                    {renderList}
                </div>
            </div>
            <div className="contact__details__map__container">
                <MapContainer
                    bounds={data.map((office) => office.coordinates)}
                    zoomControl={false}
                    style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <PointsLayer />
                </MapContainer>
            </div>
        </div>
    );
};

export default ContactDetails;
