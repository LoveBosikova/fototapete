import { NavLink } from "react-router-dom";

import ImgLike from "../icons/imgLike/imgLike";

import style from './productPreview.module.scss';

export type Iproduct = {
    id: number,
    name: string,
    metrics: string,
    img: string,
    imgs?: string[],
}

type IProductPreviewProps = {
    categoryName: string | undefined;
    product: Iproduct;
}

function ProductPreview (props: IProductPreviewProps) {

    const { product } = props
    

    return (
        <li className={style.productPreview}>
            <NavLink to={`/${product.id}`}>
                <div className={style.imgWrap}>
                    <img className={style.img} src={product.img} alt={product.name} />
                </div>
                <div className={style.textWrap}>
                    <h3 className={style.name}>{product.name}</h3>
                    <p className={style.metrics}>{product.metrics}</p>
                </div>
            </NavLink>
            <div className={style.likeWrap}>
                <ImgLike product={props.product}></ImgLike>
            </div>
        </li>
    )
}

export default ProductPreview