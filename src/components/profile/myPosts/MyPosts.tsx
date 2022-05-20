import React from 'react';
import s from './MyPosts.module.css';
import MyPost from "./myPost/MyPost";
import {PostType} from "../../../redux/state";
import TitlePage from "../../../common/TitlePage/TitlePage";

type MyPostsPropsType = {
    posts: Array<PostType>;
    addPost: (value: string) => void;
}

const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (null !== newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
        }
    }

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
                    <textarea className={s.contentPostNewText} ref={newPostElement}></textarea>
                    <button className={s.contentPostNewButton} onClick={addPost}>add post</button>
                </article>
                <div className={s.contentPostsItems}>
                    {postElements}
                </div>
            </div>
        </>
    )
}

export default MyPosts;