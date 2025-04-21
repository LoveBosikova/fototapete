import { useContext } from 'react'
import textData from '../../../texts'
import style from './cartPage.module.scss'
import { LangContext } from '../../../context/LangContext'
import CartItem from '../../ui/cartItem/cartItem'
import LinkButtonCart from '../../ui/buttons/linkButton/LinkButtonCart'

function CartPage () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].cartPage
    const products = textData[langValue as keyof typeof textData].catalog.products
    const btns = textData[langValue as keyof typeof textData].btns

    return (
        <div className={style.cartPage}>
            <p className={style.note}>{text.cart_note}</p>
            <div className={style.contentWrap}>
                <div className={style.cartTable}>
                    <ul className={style.cartHeader}>
                        <li className={style.headerItem_product}>{text.title_product}</li>
                        <li className={style.headerItem_price}>{text.title_price}</li>
                        <li className={style.headerItem_amount}>{text.title_amount}</li>
                        <li className={style.headerItem_total}>{text.title_total}</li>
                    </ul>
                    <ul className={style.cartItems}>
                        {products.map((product)=> <CartItem product={product}></CartItem>)}
                    </ul>
                </div>
                <div className={style.cartSummary}>
                    <h2 className={style.cartSummary_header}>{text.cart_total_in_cart}</h2>
                    <p className={style.cartSummary_item}>
                        <span className={style.cartSummary_subtitle}>{text.title_total}</span>
                        <span className={style.cartSummary_price}>90 €</span>
                    </p>
                    <h2 className={style.cartSummary_header}>{text.delivery}</h2>
                    <p className={style.cartSummary_text}>{text.cart_note}</p>
                    <p className={style.cartSummary_item}>
                        <span className={style.cartSummary_subtitle}>{text.discount}</span>
                        <span className={style.cartSummary_price}>0 €</span>
                    </p>
                    <p className={style.cartSummary_item}>
                        <span className={style.cartSummary_subtitle}>{text.title_total}</span>
                        <span className={style.cartSummary_price}>90 €</span>
                    </p>
                    <div className={style.cartSummary_btn}>
                        <LinkButtonCart text={btns.goToCheckout} link='/fototapete/order' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage