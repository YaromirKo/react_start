import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}><a href="/profile">Profile</a></div>
            <div className={s.item}><a href="/dialogs">Dialogs</a></div>
            <div className={s.item}><a href="/news">News</a></div>
            <div className={s.item}><a href="/music">Music</a></div>
            <div className={s.item}><a href="/setting">Setting</a></div>
        </nav>
    )
};

export default Navbar;
