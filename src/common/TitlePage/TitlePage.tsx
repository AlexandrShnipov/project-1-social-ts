import React from "react";
import s from './TitlePage.module.css';

type PageTitlePropsType = {
    title: string;
}

const TitlePage = (props: PageTitlePropsType) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    )
}
export default TitlePage;