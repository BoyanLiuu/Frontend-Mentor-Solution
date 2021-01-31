/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import canadaIllustration from '../assets/images/shared/desktop/illustration-canada.svg';
import australiaIllustration from '../assets/images/shared/desktop/illustration-australia.svg';
import ukIllustration from '../assets/images/shared/desktop/illustration-united-kingdom.svg';

const StyledLocationsCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11.9rem;
    margin: 11.9rem 0 12rem 0;
    .card-container .location-section:nth-child(1),
    .card-container .location-section:nth-child(2) {
        margin-bottom: 4.8rem;
    }
    .location-img {
        width: 202px;
        height: 202px;
        position: relative;
        z-index: 2;
        margin-bottom: 4.8rem;
    }

    .card-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 35rem;
    }
    .canada {
        background-image: url(${canadaIllustration});
    }
    .australia {
        background-image: url(${australiaIllustration});
    }
    .uk {
        background-image: url(${ukIllustration});
    }
    .bot-container {
        height: 11.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .bot-container h3 {
        font-size: 2rem;
        font-weight: 500;
        line-height: 2.6rem;
        color: var(--dark-grey-color);
    }
    .button {
        color: white;
        background-color: var(--peach-color);
    }

    .button:hover {
        opacity: 0.5;
    }

    .location-section {
        position: relative;
    }
    .location-section::before {
        content: '';
        position: absolute;
        width: 20.2rem;
        height: 20.2rem;
        z-index: 1;
        opacity: 0.2;
        border-radius: 50%;
        background: linear-gradient(
            180deg,
            rgba(93, 2, 2, 0.5),
            rgba(93, 2, 2, 0.0001)
        );
    }

    .card-container .location-section:nth-child(2)::before {
        transform: rotate(-90deg);
    }
    .card-container .location-section:nth-child(3)::before {
        transform: rotate(120deg);
    }

    @media screen and (min-width: 1440px) {
        .card-container {
            flex-direction: row;
            width: 111.1rem;
            height: 36.4rem;
        }
    }
`;

const LocationsCards = () => {
    return (
        <StyledLocationsCardsContainer>
            <div className="card-container">
                <div className="location-section">
                    <div className="canada location-img" />
                    <div className="bot-container">
                        <h3>CANADA</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>

                <div className="location-section">
                    <div className="australia location-img" />
                    <div className="bot-container">
                        <h3>AUSTRALIA</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>
                <div className="location-section">
                    <div className="uk location-img" />
                    <div className="bot-container">
                        <h3>UNITED KINGDOM</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>
            </div>
        </StyledLocationsCardsContainer>
    );
};

export default LocationsCards;
