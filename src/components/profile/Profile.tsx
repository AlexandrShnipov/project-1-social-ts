import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {AddPostTextType, ProfilePageType} from "../../redux/state";

type ProfilePropsType ={
    stateProfilePage:ProfilePageType,
    addPost: (value: string) => void,
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts}
                     addPost={props.addPost}
                     addPostText={props.stateProfilePage.addPostText}

            />
        </>
    )
}

export default Profile;