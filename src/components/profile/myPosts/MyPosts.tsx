import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./myPost/MyPost";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hi my friends', likesCount: 11},
        {id: '2', message: `It's my first post!`, likesCount: 25}
    ]

    let postElements = posts.map(post => <MyPost id={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
       <>
           <div className={s.contentPosts}>
               <h2 className={s.contentPostsTitle}>My posts</h2>
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