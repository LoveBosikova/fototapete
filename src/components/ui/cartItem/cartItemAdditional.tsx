import { useUnit } from 'effector-react';
import { $additionalInCart, addAdditionalItem, removeAdditionalFromCart } from '../../pages/cart/model';
import DeleteIcon from '../../../assets/icon-delete-from-cart.jpg'

import style from './cartItem.module.scss'
import SubcategoryCheckbox from '../subcategoryCheckbox/subcategoryCheckbox';

export type ICartItemAdditionalProps = {
        name: string;
        about: string;
        id: number;
        points: string[];
        price: number;
        img: string;
}

function CartItemAdditional (props: ICartItemAdditionalProps) {
    const additionalInCart = useUnit($additionalInCart)
    // Проверяем, активен ли чекбокс (находится ли товар в корзине)
    const isActive = additionalInCart.some(item => item.id == props.id);

    return (
        <li className={style.cartItem}>
            <div className={style.block_fot_underscore}></div>
            {isActive ? <div className={style.deleteIcon}  onClick={() =>  removeAdditionalFromCart(Number(props.id))}>
                <img className={style.img} src={DeleteIcon} alt="Delete from cart" />
            </div>  : 
            <div className={style.deleteIcon}  onClick={() => addAdditionalItem(props)}>
                <SubcategoryCheckbox isActive={isActive} />
            </div>
            }
            <div className={style.productImg}>
            {<img className={style.img} src={props.img} alt={props.name} />}
            </div>
            <div className={style.productInfo}>
                <p className={style.productName}>{props.name}</p>
                <p className={style.productInfowidth}>{props.about}</p>
            </div>
            <p className={props.id === 3 ? style.price__orange : style.price}>{props.price} €</p>
        </li>
    )
}

export default CartItemAdditional