import DeleteIcon from '../../../assets/icon-delete-from-cart.jpg'
import { addSoftHyphensToNumber } from '../../../utils/addSoftHyphensToNumber';
import { removeFromCart, TCartItemForm } from '../../pages/cart/model';

import style from './cartItem.module.scss'

type ICartItemProps = {
    product: TCartItemForm;
}

function CartItem (props: ICartItemProps) {
    const { product } = props

    return (
        <li className={style.cartItem}>
            <div className={style.block_fot_underscore}></div>
            <div className={style.deleteIcon}  onClick={() => removeFromCart(+product.product?.id!)}>
                <img className={style.img} src={DeleteIcon} alt="Delete from cart" />
            </div>
            <div className={style.productImg}>
            {product?.product?.imgs?.length  && <img className={style.img} src={product.product?.imgs[0]} alt={product.product.name} />}
            </div>
            <div className={style.productInfo}>
                <p className={style.productName}>{product.product?.name} - {product.material?.name}</p>
                <p className={style.productInfowidth}>Width (cm): {addSoftHyphensToNumber(product.width!)}</p>
                <p className={style.productInfoheight}>Height (cm): {product.height}</p>
                <p className={style.productInfoTotal}>Total m2: {addSoftHyphensToNumber(+product.width!/100 * +product.height!/100)}</p>
            </div>
            <p className={style.price}>~ {product.material?.price ? product.material?.price * (+product.width!/100 * +product.height!/100) : '?'} €</p>
        </li>
    )
}

export default CartItem