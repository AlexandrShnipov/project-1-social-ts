import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./myPost/MyPost";

const MyPosts = () => {
    return (
       <>
           <div className={s.contentPosts}>
               <h2 className={s.contentPostsTitle}>My posts</h2>
               <article className={s.contentPostNew}>
                   <textarea className={s.contentPostNewText}></textarea>
                   <button className={s.contentPostNewButton}>add post</button>
               </article>
               <div className={s.contentPostsItems}>
                <MyPost />
               </div>
           </div>
       </>
    )
}

export default MyPosts;