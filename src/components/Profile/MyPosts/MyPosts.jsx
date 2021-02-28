import React from 'react';
import Post from "./Post/Post";
import './MyPosts.module.css';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let posts = props.postsData.map(
        p => <Post message={p.message} likeCount={p.likeCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = ()=> {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>
);
}

export default MyPosts;