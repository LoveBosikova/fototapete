import DeleteIcon from '../../../assets/icon-delete-from-cart.jpg'

import style from './cartItem.module.scss'

type ICartItemProps = {
    product: any;
}

function CartItem (props: ICartItemProps) {
    const { product } = props

    console.log(product);
    return (
        <li className={style.cartItem}>
            <div className={style.block_fot_underscore}></div>
            <div className={style.deleteIcon}>
                <img className={style.img}  src={DeleteIcon} alt="Delete from cart" />
            </div>
            <div className={style.productImg}>
                <img className={style.img} src={product.img} alt={product.name} />
            </div>
            <div className={style.productInfo}>
                <p className={style.productName}>{product.name}</p>
                <p className={style.productInfowidth}>Width (cm): 500</p>
                <p className={style.productInfoheight}>Height (cm): 100</p>
                <p className={style.productInfoTotal}>Total m2: 5</p>
            </div>
            <p className={style.price}>40 €</p>
            <p className={style.amount}>1</p>
            <p className={style.total}>40 €</p>
        </li>
    )
}

export default CartItem