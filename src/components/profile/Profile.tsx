import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType ={
    stateProfile:ProfilePageType,
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfile.posts}/>
        </>
    )
}

export default Profile;