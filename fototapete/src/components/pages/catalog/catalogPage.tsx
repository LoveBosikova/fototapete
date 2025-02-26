import { Outlet } from "react-router";
import { useContext, useState } from "react";
import { LangContext } from "../../../context/LangContext";
import { CurCategoryContext } from '../../../context/curCategoryContext';

import Title from '../../ui/title/title';
import Search from "../../ui/search/search";

import textData from "../../../texts";
import prepareTextToLink from "../../../utils/prepareTextToLink";

import style from './catalogPage.module.scss';

function CatalogPage () {
    const { lang } = useContext(LangContext)
    const { curCategory } = useContext(CurCategoryContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage

    const [ chosenSubcategories, setChosenSubcategories ] = useState<string[]>([])
    const [ chosenColors, setChosenColors ] = useState<string[]>([])

    const category = text.categories.filter((category) => prepareTextToLink(category?.categoryName) == prepareTextToLink(curCategory))

    console.log(curCategory)

    return (
        <div className={style.catalogPage}>
            <div className={style.titleWrap}>
                <div className={style.h1Wrap}>
                    <Title text={text.title} isBlack={true}></Title>
                </div>
                <div className={style.breadCrumbs}>
                    <p className={style.path}>{text.breadcrumbles}{curCategory ? ` / ${category[0]?.categoryName}` : ''}</p>
                </div>
                <div className={style.contentWrap}>
                    <div className={style.searchWrap}>
                        <Search
                            chosenSubcategories={chosenSubcategories} 
                            setChosenSubcategories={setChosenSubcategories}
                            chosenColors={chosenColors}
                            setChosenColors={setChosenColors}
                            >
                        </Search>
                    </div>
                    <div className={style.outletWrap}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage