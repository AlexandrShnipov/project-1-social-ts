import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./myPost/MyPost";
import {PostType} from "../../../redux/state";
import TitlePage from "../../../common/TitlePage/TitlePage";

type MyPostsPropsType = {
    posts: Array<PostType>;
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map((post: PostType) =>
        <MyPost
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}/>)

    return (
       <>
           <div className={s.contentPosts}>
               <TitlePage title={'My posts'}/>
               <article className={s.contentPostNew}>
                   <textarea className={s.contentPostNewText}></textarea>
                   <button className={s.contentPostNewButton}>add post</button>
               </article>
               <div className={s.contentPostsItems}>
                   {postElements}
               </div>
           </div>
       </>
    )
}

export default MyPosts;