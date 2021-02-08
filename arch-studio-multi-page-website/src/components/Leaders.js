import React from 'react';
import { LeaderCard } from '../components';
import { leadersData as data } from './../assets/data/data';

const Leaders = () => {
    const leadCards = data.map((item, idx) => {
        return (
            <LeaderCard
                key={idx}
                avatar={require(`../assets/images/about/desktop/${item.img}`)}
                name={item.name}
                title={item.title}
            />
        );
    });
    return (
        <div className="leaders">
            <h2 className="leaders__heading">
                The
                <br />
                Leaders
            </h2>
            <div className="leaders__cards">{leadCards}</div>
        </div>
    );
};

export default Leaders;
