import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>Profile</div>
            <div className={s.item}>Message</div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Setting</div>
        </nav>
    )
};

export default Navbar;
