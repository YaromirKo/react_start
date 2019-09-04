import React from 'react';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <textarea/>
            <button>add post</button>
            <Post message='Hi,...'/>
            <Post message='Normal'/>
        </div>
    )
};

export default MyPosts;