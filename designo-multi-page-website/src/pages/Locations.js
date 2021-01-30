/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import test from '../assets/images/locations/desktop/image-map-australia.png';

const StyledLocationsPageContainer = styled.div`
    width: 100%;
    .leaflet-map-container {
        height: 25rem;
    }
    .locations {
        margin-bottom: 31rem;
    }
    .location {
        height: 71.4rem;
        margin-bottom: 4rem;
    }
    .location-map {
        width: 100%;
        height: 32rem;
    }
    .location-desc-container {
        height: 39.4rem;
        background-color: var(--extra-light-peach-color);
    }
    .location-desc-inner-container {
        width: 32.7rem;
        height: 23.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .location-desc-inner-container h2 {
        color: var(--peach-color);
        margin-bottom: 2.4rem;
    }
    .location-address {
        margin-bottom: 2.4rem;
    }
    .bold {
        font-weight: 700;
    }
`;

function Locations() {
    const locationData = [
        {
            location: 'Camada',
            officeName: 'Designo Central Office',
            streetName: '3886 Wellington Street',
            city: 'Toronto, Ontario M9C 3J5',
            phone: 'P : +1 253-863-8967',
            email: 'M : contact@designo.co',
            coord: [43.64531, -79.39619],
        },
        {
            location: 'Australia',
            officeName: 'Designo AU Office',
            streetName: '19 Balonne Street',
            city: 'New South Wales 2443',
            phone: 'P : (02) 6720 9092',
            email: 'M : contact@designo.au',
            coord: [-30.32925, 149.78824],
        },
        {
            location: 'United Kingdom',
            officeName: 'Designo UK Office',
            streetName: '13  Colorado Way',
            city: 'Rhyd-y-fro SA8 9GA',
            phone: 'P : 078 3115 1400',
            email: 'M : contact@designo.uk',
            coord: [51.72922, -3.86043],
        },
    ];

    const renderList = locationData.map((item, idx) => {
        return (
            <div className="location" key={idx}>
                <div className="location-map">
                    <MapContainer
                        center={item.coord}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={item.coord}></Marker>
                    </MapContainer>
                </div>

                <div className="location-desc-container flex-col-vh-center">
                    <div className="location-desc-inner-container">
                        <h2 className="phone-hero-text">{item.location}</h2>
                        <div className="location-desc-detail phone-hero-subtext">
                            <div className="location-address">
                                <p className="bold">{item.officeName}</p>
                                <p>{item.streetName}</p>
                                <p>{item.city}</p>
                            </div>
                            <div className="location-contact">
                                <p className="bold">Contact</p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <StyledLocationsPageContainer>
            <GlobalStyle />
            <main>
                <Header />

                <div className="locations">{renderList}</div>

                <Footer />
            </main>
        </StyledLocationsPageContainer>
    );
}

export default Locations;
