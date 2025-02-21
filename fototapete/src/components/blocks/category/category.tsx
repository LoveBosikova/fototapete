import { useParams } from "react-router";

import style from './category.module.scss';
import Search from "../../ui/search/search";
import { useContext, useState } from "react";
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";
import ProductPreview from "../../ui/productPreview/productPreview";
import LinkButtonOrange from "../../ui/buttons/linkButton/linkButtonOrange";

function Category () {
    let { cid  } = useParams();

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    const textCatalog = textData[langValue as keyof typeof textData].catalog
    const textBtn = textData[langValue as keyof typeof textData].btns

    const category = text.categories.filter((category) => category.categoryName === cid)

    const [ chosenSubcategories, setChosenSubcategories ] = useState<string[]>([])
    const [ chosenColors, setChosenColors ] = useState<string[]>([])

    console.log(category)

    return (
        <div className={style.category}>
            <div className={style.contentWrap}>
                <div className={style.searchWrap}>
                    <Search 
                    category={category} 
                    chosenSubcategories={chosenSubcategories} 
                    setChosenSubcategories={setChosenSubcategories}
                    chosenColors={chosenColors}
                    setChosenColors={setChosenColors}
                    />
                </div>
                <ul className={style.results}>
                    {textCatalog.products.map((product) => <div className={style.productWrap}><ProductPreview product={product} categoryName={category.map((i)=> i.categoryName)[0]} ></ProductPreview></div>)}
                </ul>

            </div>
            <div className={style.btnWrap}>
                <LinkButtonOrange text={textBtn.loadMore} link={''}></LinkButtonOrange>
            </div>
        </div>
    )
}

export default Category