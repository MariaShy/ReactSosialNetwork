import React from 'react';
import Post from "./Post/Post";
import './MyPosts.module.css';
import s from './MyPosts.module.css';

const MyPosts = () => {
	return (
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi! How are you?' likeCount='1'/>
            <Post message='It is a cool pic!' likeCount='2'/>
            <Post message='Welcome!' likeCount='0'/>
        </div>
    </div>
);
}

export default MyPosts;