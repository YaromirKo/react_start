import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <textarea/>
            <button>add post</button>
            <Post message='Hi,...'/>
            <Post message='Normal'/>
        </div>
    )
};

export default MyPosts;