import React from "react";
import s from './MyPost.module.css';

const MyPost = () => {
    return (
        <article className={s.contentPostItem}>
            <img className={s.contentPostItemUser} src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
                 alt="foto is user"/>
            <p className={s.contentPostItemText}>Message</p>
            <div className={s.contentPostItemLikes}>
                <span className={s.likesCount}>Like 25</span>
            </div>
        </article>
    )
}

export default MyPost;