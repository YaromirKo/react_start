import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likeCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        //let txt = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST'});
        // newPostElement.current.value = '';
        // props.updateNewPostText('');
    };

    let onPostChange = () => {
        let input = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: input});
    };

    return (
        <div className={s.postsBlock}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
            <button onClick={addPost}>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;