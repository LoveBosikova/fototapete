import { NavLink } from "react-router-dom";

import style from './productPreview.module.scss';
import ImgLike from "../icons/imgLike/imgLike";

export type Iproduct = {
    id: number,
        name: string,
        metrics: string,
        img: string,
}

type IProductPreviewProps = {
    categoryName: string;
    product: Iproduct;
}

function ProductPreview (props: IProductPreviewProps) {
    const { categoryName, product } = props

    return (
        <li className={style.productPreview}>
            <NavLink to={`/fototapete/catalog/${categoryName}/${product.id}`} end>
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