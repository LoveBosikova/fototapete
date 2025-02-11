import { Outlet } from "react-router";

import Title from '../../ui/title/title';

import style from './catalogPage.module.scss';
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";

function CatalogPage () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    // const btnText = textData[langValue as keyof typeof textData].btns

    return (
        <div className={style.catalogPage}>
            <div className={style.titleWrap}>
                <div className={style.h1Wrap}>
                    <Title text={text.title} isBlack={true}></Title>
                </div>
                <div className={style.breadCrumbs}>
                    <p className={style.path}>{text.breadcrumbles}</p>
                </div>

                <Outlet />

            </div>
        </div>
    )
}

export default CatalogPage