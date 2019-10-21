import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () => {

    // eslint-disable-next-line
    let postData = [
        { id: 1, message: 'Hi,...', likeCount: 12 },
        { id: 2, message: 'Normal', likeCount: 1 }
    ];

    let postsElements = postData.map(post => <Post message={post.message} likesCount={post.likeCount}/>);

    return (
        <div className={s.postsBlock}>
            <textarea/>
            <button>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;