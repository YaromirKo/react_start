import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div><img src="https://img.icons8.com/material/4ac144/256/user-male.png" alt=""/></div>
            <div className={s.descriptionBlock}>ava</div>
        </div>
    )
};

export default ProfileInfo;