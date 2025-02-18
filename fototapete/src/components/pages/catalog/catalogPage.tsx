import { Outlet, useLocation } from "react-router";

import Title from '../../ui/title/title';

import style from './catalogPage.module.scss';
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";

function CatalogPage () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage

    const [ curCategory, setcurCategory ] = useState('')

    let location = useLocation();

    useEffect(()=>{
        const lastPart = location.pathname.split('/').pop()
        lastPart !== 'catalog' && lastPart ? setcurCategory(lastPart) : setcurCategory('')
    }, [location])

    return (
        <div className={style.catalogPage}>
            <div className={style.titleWrap}>
                <div className={style.h1Wrap}>
                    <Title text={text.title} isBlack={true}></Title>
                </div>
                <div className={style.breadCrumbs}>
                    <p className={style.path}>{text.breadcrumbles}{curCategory ? ` / ${curCategory}` : ''}</p>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default CatalogPage