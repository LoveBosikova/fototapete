import { useParams } from "react-router";

import style from './category.module.scss';
import Search from "../../ui/search/search";
import { useContext, useState } from "react";
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";

function Category () {
    let { cid  } = useParams();

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    // const textBtn = textData[langValue as keyof typeof textData].btns

    const category = text.categories.filter((category) => category.categoryName === cid)

    const [ chosenSubcategories, setChosenSubcategories ] = useState<string[]>([])
    const [ chosenColors, setChosenColors ] = useState<string[]>([])


    return (
        <div className={style.category}>
            <div className={style.searchWrap}>
                <Search 
                category={category} 
                chosenSubcategories={chosenSubcategories} 
                setChosenSubcategories={setChosenSubcategories}
                chosenColors={chosenColors}
                setChosenColors={setChosenColors}
                />
            </div>
            <div className={style.results}></div>
        </div>
    )
}

export default Category