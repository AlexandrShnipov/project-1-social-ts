import React from "react";
import s from './MyPost.module.css';

type MyPostPropsType = {
    id?: string
    message: string
    likesCount: number
}

const MyPost = (props: MyPostPropsType) => {
    return (
        <article className={s.contentPostItem}>
            <img className={s.contentPostItemUser} src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
                 alt="foto is user"/>
            <p className={s.contentPostItemText}>{props.message}</p>
            <div className={s.contentPostItemLikes}>
                <span className={s.likesCount}>Like {props.likesCount}</span>
            </div>
        </article>
    )
}

export default MyPost;