import style from './orderItem.module.scss';
import { ICartItemAdditionalProps } from "../cartItem/cartItemAdditional";

function OrderAdditionslItem (props: ICartItemAdditionalProps) {

    return (
        <li className={style.orderItem}>
            <div className={style.info}>
                <p className={style.name}>{`${props.name}`}</p>
            </div>
            <p className={style.price}>{props.price}</p>
        </li>
    )
}

export default OrderAdditionslItem