import React from "react";
import s from './News.module.css';
import ContainerPage from "../../common/containerPage/ContainerPage";
import TitlePage from "../../common/TitlePage/TitlePage";

const News = () => {
    return (
        <ContainerPage>
            <TitlePage title={'News'}/>
        </ContainerPage>
    )
}

export default News;
