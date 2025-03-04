import { NavLink } from "react-router-dom";

import ImgLike from "../icons/imgLike/imgLike";

import style from './productPreview.module.scss';
// import { useContext } from "react";
// import { LangContext } from "../../../context/LangContext";
// import textData from "../../../texts";

export type Iproduct = {
    id: number,
        name: string,
        metrics: string,
        img: string,
}

type IProductPreviewProps = {
    categoryName: string | undefined;
    product: Iproduct;
}

function ProductPreview (props: IProductPreviewProps) {

    // const { lang } = useContext(LangContext)
    // const langValue = lang.value.toLowerCase()
    // const text = textData[langValue as keyof typeof textData].categoriesPage
    const { 
        // categoryName = text.categories[0]?.categoryName, 
        product } = props

    return (
        <li className={style.productPreview}>
            <NavLink to={`/fototapete/${product.id}`}>
                <div className={style.imgWrap}>
                    <img className={style.img} src={product.img} alt={product.name} />
                </div>
                <div className={style.textWrap}>
                    <h3 className={style.name}>{product.name}</h3>
                    <p className={style.metrics}>{product.metrics}</p>
                </div>
            </NavLink>
            <div className={style.likeWrap}>
                {/* TODO: like functional! */}
                <ImgLike isActive={true}></ImgLike>
            </div>
        </li>
    )
}

export default ProductPreview