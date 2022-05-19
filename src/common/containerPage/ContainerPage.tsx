import React from "react";
import s from './ContainerPage.module.css';

type ContainerPagePropsType = {
    children: JSX.Element;
}

const ContainerPage = (props: ContainerPagePropsType) => {
    return (
        <div className={s.container}>
            {props.children}
        </div>
    )
}
export default ContainerPage;