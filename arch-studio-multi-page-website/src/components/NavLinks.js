import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const navigationlistLinks = ['portfolio', 'about', 'contact'];
    const renderList = navigationlistLinks.map((link, i) => (
        <li className="link-item" key={i}>
            <Link to={`/${link}`}>{i === 1 ? link + ` Us` : link}</Link>
        </li>
    ));

    return <ul className="link-items">{renderList}</ul>;
};

export default NavLinks;
