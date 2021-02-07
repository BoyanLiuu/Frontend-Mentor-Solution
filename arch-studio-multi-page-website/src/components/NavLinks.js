import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    const navigationlistLinks = ['portfolio', 'about', 'contact'];
    const renderList = navigationlistLinks.map((link, i) => (
        <li className="link-item" key={i}>
            <NavLink activeClassName="hoverColor" to={`/${link}`}>
                {i === 1 ? link + ` Us` : link}
            </NavLink>
        </li>
    ));

    return <ul className="link-items">{renderList}</ul>;
};

export default NavLinks;
