import React from 'react';
import Post from "./Post/Post";
import './MyPosts.module.css';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsData = [
        {id: 1, likeCount: 12, message: 'Hi'},
        {id: 2, likeCount: 0, message: 'How is life?'},
    ]

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
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
        </div>
    </div>
);
}

export default MyPosts;