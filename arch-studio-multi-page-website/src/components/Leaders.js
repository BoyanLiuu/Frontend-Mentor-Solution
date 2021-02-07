import React from 'react';
import { LeaderCard } from '../components';
import jake from '../assets/images/about/desktop/avatar-jake.jpg';
import thompson from '../assets/images/about/desktop/avatar-thompson.jpg';
import jackson from '../assets/images/about/desktop/avatar-jackson.jpg';
import maria from '../assets/images/about/desktop/avatar-maria.jpg';

const Leaders = () => (
    <div className="leaders">
        <h2 className="leaders__heading">The Leaders</h2>
        <div className="leaders__card__container">
            <LeaderCard
                avatar={jake}
                name="Jake Richards"
                title="Chief Architect"
            />
            <LeaderCard
                avatar={thompson}
                name="Thompson Smith"
                title="Head of Finance"
            />
            <LeaderCard
                avatar={jackson}
                name="Jackson Rourke"
                title="Lead Designer"
            />
            <LeaderCard
                avatar={maria}
                name="Maria Simpson"
                title="Senior Architect"
            />
        </div>
    </div>
);

export default Leaders;
