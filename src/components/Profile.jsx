// eslint-disable-next-line no-unused-vars
import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="https://img.icons8.com/material/4ac144/256/user-male.png" alt=""/></div>
            <div className={s.item}>ava</div>
        </div>
    )
};

export default Profile;