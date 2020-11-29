import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
    <div>
        <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
);
}

export default Profile;