import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {PostType} from "../../index";

type ProfilePostType ={
    posts:Array<PostType>
}

const Profile = (props: ProfilePostType) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </>
    )
}

export default Profile;