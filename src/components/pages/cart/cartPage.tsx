import { useContext, useEffect, useRef } from 'react'
import { LangContext } from '../../../context/LangContext'
import CartItem from '../../ui/cartItem/cartItem'
import { useUnit } from 'effector-react'
import { $cart, $totalPrice } from './model'
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange'

import textData from '../../../texts'

import style from './cartPage.module.scss'

function CartPage () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].cartPage
    const btns = textData[langValue as keyof typeof textData].btns
    const cart = useUnit($cart)
    const totalPrice = useUnit($totalPrice)

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <div className={style.cartPage} ref={containerRef}>
            <p className={style.note}>{text.cart_note}</p>
            <div className={style.contentWrap}>
                {cart.length ? 
                    <>
                    <div className={style.cartTable}>
                        <ul className={style.cartHeader}>
                            <li className={style.headerItem_product}>{text.title_product}</li>
                            <li className={style.headerItem_price}>{text.title_price}</li>
                        </ul>
                        <ul className={style.cartItems}>
                            {cart.map((product)=> <CartItem key={product.product?.id} product={product}></CartItem>)}
                        </ul>
                    </div>
                    <div className={style.cartSummary}>
                        <h2 className={style.cartSummary_header}>{text.cart_total_in_cart}</h2>
                        <p className={style.cartSummary_item}>
                            <span className={style.cartSummary_subtitle}>{text.title_total}</span>
                            <span className={style.cartSummary_price}>{totalPrice} €</span>
                        </p>
                        <h2 className={style.cartSummary_header}>{text.delivery}</h2>
                        <p className={style.cartSummary_text}>{text.cart_note}</p>
                        <p className={style.cartSummary_item}>
                            <span className={style.cartSummary_subtitle}>{text.discount}</span>
                            <span className={style.cartSummary_price}>0 €</span>
                        </p>
                        <p className={style.cartSummary_item}>
                            <span className={style.cartSummary_subtitle}>{text.title_total}</span>
                            <span className={style.cartSummary_price}>{totalPrice} €</span>
                        </p>
                        <div className={style.cartSummary_btn}>
                            <LinkButtonOrange text={btns.goToCheckout} link='/order' />
                        </div>
                    </div>
                    </>
                    :
                    <div className={style.noWrap}>
                        <div className={style.noCartItems}>{text.noCartItems}</div>
                        <div className={style.btnWrap}>
                            <LinkButtonOrange text={btns.catalog} link={`/catalog`}></LinkButtonOrange>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartPage