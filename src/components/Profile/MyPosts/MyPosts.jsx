import React from 'react';
import Post from "./Post/Post";
import './MyPosts.module.css';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = [
        {id: 1, likeCount: 12, message: 'Hi'},
        {id: 2, likeCount: 0, message: 'How is life?'},
        {id: 3, likeCount: 0, message: 'How is you?'}
    ]
    let posts = postsData.map(
        p => <Post message={p.message} likeCount={p.likeCount}/>
        )

    return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { posts }
        </div>
    </div>
);
}

export default MyPosts;