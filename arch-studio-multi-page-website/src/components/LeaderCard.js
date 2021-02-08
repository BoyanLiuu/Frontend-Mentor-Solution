/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ReactComponent as Linkedin } from './../assets/images/icons/icon-linkedin.svg';
import { ReactComponent as Twitter } from './../assets/images/icons/icon-twitter.svg';
const LeaderCard = ({ avatar, name, title }) => (
    <div className="leaders__card">
        <div className="leaders__card__avatar-container">
            <img
                className="leaders__card__avatar"
                src={avatar}
                alt={`${name}'s headshot`}
            />
            <div className="leaders__card__avatar__overlay leaders__card__avatar__overlay--desktop">
                <a href="https://twitter.com/" className="social-logo">
                    <Linkedin />
                </a>
                <a href="https://www.facebook.com/" className="social-logo">
                    <Twitter className="twitter" />
                </a>
            </div>
        </div>
        <div className="leaders__card__textbox">
            <h5>{name}</h5>
            <p>{title}</p>
            <div className="leaders__card__avatar__overlay">
                <a href="https://twitter.com/" className="social-logo">
                    <Linkedin />
                </a>
                <a href="https://www.facebook.com/" className="social-logo">
                    <Twitter className="twitter" />
                </a>
            </div>
        </div>
    </div>
);

export default LeaderCard;
