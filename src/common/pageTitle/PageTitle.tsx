import React from "react";
import s from './PageTitle.module.css';

type PageTitlePropsType = {
    title: string;
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    )
}
export default PageTitle;