import { useParams } from "react-router";
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

import ProductPreview from "../../ui/productPreview/productPreview";
import LinkButtonOrange from "../../ui/buttons/linkButton/linkButtonOrange";

import textData from "../../../texts";

import style from './category.module.scss';

function Category () {
    let { cid  } = useParams();

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    const textCatalog = textData[langValue as keyof typeof textData].catalog
    const textBtn = textData[langValue as keyof typeof textData].btns

    const category = text.categories.filter((category) => category.categoryName === cid)

    return (
        <div className={style.category}>
            <div className={style.contentWrap}>
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