import React from "react";
import s from './Friends.module.css';
import ContainerPage from "../../common/containerPage/ContainerPage";
import TitlePage from "../../common/TitlePage/TitlePage";

const Friends = () => {
    return (
        <ContainerPage>
           <TitlePage title={"Friends"}/>
        </ContainerPage>
    )
}

export default Friends;