import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType ={
    stateProfile:ProfilePageType,
    addPost: (value: string) => void,
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfile.posts}
                     addPost={props.addPost}
            />
        </>
    )
}

export default Profile;