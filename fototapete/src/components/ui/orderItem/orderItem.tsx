import { useContext } from "react";
import textData from "../../../texts";
import { Iproduct } from "../productPreview/productPreview";
import style from './orderItem.module.scss';
import { LangContext } from "../../../context/LangContext";

export type TPropsOrderItem = {
    product: any;
    material: string;
    width: number | string;
    height: number | string;
    total_m2: number | string;
    count: number | string;
}

function OrderItem (props: TPropsOrderItem) {
    const { 
        product, 
        material, 
        width, 
        height, 
        total_m2,
        count,
    } = props

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].orderPage

    return (
        <li className={style.orderItem}>
            <div className={style.info}>
                <p className={style.name}>{`${product.name} — ${material} x ${count}`}</p>
                <div className={style.metricsWrap}>
                    <p>{`${text.width} ${width}`}</p>
                    <p>{`${text.width} ${height}`}</p>
                    <p>{`${text.total_m2} ${total_m2}`}</p>
                </div>
            </div>
            <p className={style.price}>40 €</p>
        </li>
    )
}

export default OrderItem