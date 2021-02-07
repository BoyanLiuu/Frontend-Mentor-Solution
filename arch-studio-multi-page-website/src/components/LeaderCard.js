import React from 'react';

const LeaderCard = ({ avatar, name, title }) => (
    <div className="leaders__card">
        <div className="leaders__card__avatar__container">
            <img className="leaders__card__avatar" src={avatar} alt={`${name}'s company headshot`} />
            <div className="leaders__card__avatar__overlay">
                <a href="#">
                    <div className="white" />
                    <i className="fab fa-linkedin" aria-label="View this leader on LinkedIn" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fab fa-twitter" aria-label="View this leader on Twitter" aria-hidden="true" />
                </a>
            </div>
        </div>
        <div className="leaders__card__textbox">
            <h5 className="leaders__card__textbox--name">{name}</h5>
            <small className="leaders__card__textbox--title">{title}</small>
        </div>
    </div>
)

export default LeaderCard;