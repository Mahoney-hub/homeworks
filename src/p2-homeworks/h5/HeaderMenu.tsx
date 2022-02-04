import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './HeaderNav.module.css';

export const HeaderMenu = () => {
    const setActive = ({isActive}:any) => isActive ? s.active : '';

    return (
        <nav className={s.navbar}>
            <NavLink to={'/pre-junior'} className={setActive}>prev-junior</NavLink>
            <NavLink to={'/junior'} className={setActive}>junior</NavLink>
            <NavLink to={'/junior-plus'} className={setActive}>junior-plus</NavLink>
        </nav>
    );
};


