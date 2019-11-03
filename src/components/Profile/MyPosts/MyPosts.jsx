import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likeCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        let txt = newPostElement.current.value;
        console.log(txt);
    };

    return (
        <div className={s.postsBlock}>
            <textarea ref={newPostElement}/>
            <button onClick={addPost}>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;