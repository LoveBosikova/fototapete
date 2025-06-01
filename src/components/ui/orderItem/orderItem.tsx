import { useContext } from "react";
import textData from "../../../texts";
import style from './orderItem.module.scss';
import { LangContext } from "../../../context/LangContext";
import { IMaterial } from "../../../types";

export type TPropsOrderItem = {
    product: any;
    material: IMaterial;
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
        // total_m2,
        // count,
    } = props

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].orderPage

    return (
        <li className={style.orderItem}>
            <div className={style.info}>
                <p className={style.name}>{`${product.name} — ${material.name} x 1`}</p>
                <div className={style.metricsWrap}>
                    <p>{`${text.width} ${width}`}</p>
                    <p>{`${text.width} ${height}`}</p>
                    <p>{`${text.total_m2} ${((Number(width)/100)*(Number(height)/100)).toFixed(2)}`}</p>
                </div>
            </div>
            <p className={style.price}>{material.id && width && height? `${+((Number(width)/100)*(Number(height)/100)).toFixed(2)*Number(material.price)} €` : `-`}</p>
        </li>
    )
}

export default OrderItem