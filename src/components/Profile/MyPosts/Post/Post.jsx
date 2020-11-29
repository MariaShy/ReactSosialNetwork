import React from 'react';
import './Post.module.css';
import s from './Post.module.css';

const Post = (props) => {
	return (
        <div className={s.item}>
            <img src='https://sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg' />
            {props.message}
            <div>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;