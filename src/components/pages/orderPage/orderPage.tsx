import { useContext, useEffect } from 'react'
import textData from '../../../texts'
import { LangContext } from '../../../context/LangContext'
import style from './orderPage.module.scss'
import { $form, changeTaskForm } from './model'
import { useUnit } from 'effector-react'
import SubcategoryCheckbox from '../../ui/subcategoryCheckbox/subcategoryCheckbox'
import OrderItem from '../../ui/orderItem/orderItem'
import LinkButtonOrangeWhite from '../../ui/buttons/linkButton/linkBurronOrangeWhite'
import { $cart, $totalPrice, finishOrder } from '../cart/model'
import { Modal } from '../../ui/modal/Modal'
import { openModal } from '../../ui/modal/model'

function OrderPage () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].orderPage
    const btns = textData[langValue as keyof typeof textData].btns
    const form = useUnit($form)
    const cart = useUnit($cart)
    const totalPrice = useUnit($totalPrice)

    const modalText = textData[langValue as keyof typeof textData].modals

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <div className={style.orderPage}>
            <p className={style.note}>{text.cart_note_installation}</p>
            <div className={style.content}>
                <form 
                className={style.form}
                onChange={(e) => console.log(e)}
                >
                    <div className={style.switch}>
                        <div 
                        className={form.isPrivate? style.switch_item_active : style.switch_item}
                        onClick={()=> changeTaskForm({ key: "isPrivate", value: true })}
                        >
                            {text.private}
                        </div>
                        <div 
                        className={form.isPrivate? style.switch_item : style.switch_item_active}
                        onClick={()=> changeTaskForm({ key: "isPrivate", value: false })}
                        >
                            {text.company}
                        </div>
                    </div>
                    <h2 className={style.form_title}>{text.contact_information}</h2>
                    <div className={style.row}>
                        <div className={style.halfrow}>
                            <p className={style.form_label}>{text.first_name}</p>
                            <input 
                            value={form.first_name}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "first_name", 
                                    value: e.target.value })
                                }}
                            type='text'
                            />
                        </div>
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.last_name}</p>
                            <input 
                            value={form.last_name}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "last_name", 
                                    value: e.target.value })
                                }}
                            type='text'
                            />
                        </div>
                    </div>
                    <p className={style.form_label}>{text.email}</p>
                    <input 
                    value={form.email}
                    onChange={(e) => {
                        changeTaskForm({ key: "email", value: e.target.value });
                    }}
                    type='text' 
                    />
                    <p className={style.form_label}>{text.phone_number}</p>
                    <input 
                    value={form.phone}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "phone", 
                            value: e.target.value });
                        }}
                    type='text'
                    />
                    <h2 className={style.form_title}>{text.shippnig_information}</h2>
                    {!form.isPrivate ? 
                        <>
                        <p className={style.form_label}>{text.company}</p>
                            <input 
                            value={form.country}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "company", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </>
                    : null}

                    <div className={style.row}>
                        {form.isPrivate ? 
                            <div className={style.halfrow}>
                            <p className={style.form_label}>{text.country}</p>
                            <input 
                            value={form.country}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "country", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </div> 
                        : <div className={style.halfrow}>
                            <p className={style.form_label}>{text.oib}</p>
                        <input 
                        value={form.address}
                        onChange={(e) => {
                            changeTaskForm({ 
                                key: "OIB", 
                                value: e.target.value });
                            }}
                        type='text'
                        />
                        </div>}

                        {/* <div className={style.halfrow}>
                            <p className={style.form_label}>{text.company}</p>
                            <input 
                            value={form.country}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "company", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </div> */}
                        
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.city}</p>
                            <input 
                            value={form.city}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "city", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </div>
                    </div>
                    <p className={style.form_label}>{text.address}</p>
                    <input 
                    value={form.address}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "address", 
                            value: e.target.value });
                        }}
                    type='text'
                    />
                    <div className={style.row}>
                        <div className={style.halfrow}>
                            <p className={style.form_label}>{text.postal_code}</p>
                            <input 
                            value={form.postal_code}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "postal_code", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </div>
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.district}</p>
                            <input 
                            value={form.district}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "district", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />
                        </div>
                    </div>
                    <h2 className={style.form_title}>{text.additional_information}</h2>
                    <p className={style.form_label}>{text.order_notes}</p>
                    <textarea name="" id=""className={style.textarea} />
                    <div className={style.checkboxWrap} onClick={() => {
                                changeTaskForm({ 
                                    key: "invoice_address", 
                                    value: !form.invoice_address });
                                }}>
                        <div className={style.checkbox}>
                            <SubcategoryCheckbox isActive={form.invoice_address}/>
                        </div>
                        <p className={style.form_label}>{text.invoice_address}</p>
                        </div>
                        {
                        form.invoice_address && 
                        <>
                            <div className={style.row}>
                                <div className={style.halfrow}>
                                    <p className={style.form_label}>{text.first_name}</p>
                                    <input 
                                    value={form.first_name}
                                    onChange={(e) => {
                                        changeTaskForm({ 
                                            key: "first_name", 
                                            value: e.target.value })
                                        }}
                                    type='text'
                                    />
                                </div>
                                <div className={style.halfrow}>
                                <p className={style.form_label}>{text.last_name}</p>
                                    <input 
                                    value={form.last_name}
                                    onChange={(e) => {
                                        changeTaskForm({ 
                                            key: "last_name", 
                                            value: e.target.value })
                                        }}
                                    type='text'
                                    />
                                </div>
                            </div>
                            <div className={style.row}>
                            <div className={style.halfrow}>
                                <p className={style.form_label}>{text.company}</p>
                                <input 
                                value={form.country}
                                onChange={(e) => {
                                    changeTaskForm({ 
                                        key: "country", 
                                        value: e.target.value });
                                    }}
                                type='text'
                                />
                            </div>
                            <div className={style.halfrow}>
                            <p className={style.form_label}>{text.city}</p>
                                <input 
                                value={form.city}
                                onChange={(e) => {
                                    changeTaskForm({ 
                                        key: "city", 
                                        value: e.target.value });
                                    }}
                                type='text'
                                />
                            </div>
                            </div>
                            <p className={style.form_label}>{text.address}</p>
                            <input 
                            value={form.address}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "address", 
                                    value: e.target.value });
                                }}
                            type='text'
                            />

                            <div className={style.row}>
                                <div className={style.halfrow}>
                                    <p className={style.form_label}>{text.postal_code}</p>
                                    <input 
                                    value={form.postal_code}
                                    onChange={(e) => {
                                        changeTaskForm({ 
                                            key: "postal_code", 
                                            value: e.target.value });
                                        }}
                                    type='text'
                                    />
                                </div>
                                <div className={style.halfrow}>
                                <p className={style.form_label}>{text.district}</p>
                                    <input 
                                    value={form.district}
                                    onChange={(e) => {
                                        changeTaskForm({ 
                                            key: "district", 
                                            value: e.target.value });
                                        }}
                                    type='text'
                                    />
                                </div>
                            </div>
                        </>
                        }
                </form>

                <div className={style.order}>
                <h2 className={style.order_title}>{text.your_order}</h2>
                <div className={style.order__header}>
                    <p className={style.order_title}>{text.product}</p>
                    <p className={style.order_title}>{text.total}</p>
                </div>
                <ul className={style.order__items}>
                    {cart.map((item : any) => <OrderItem {...item} /> )}
                </ul>
                <div className={style.order__header}>
                    <p className={style.order_title}>{text.total}</p>
                    <p className={style.order_title}>{totalPrice} €</p>
                </div>
                <h2 className={style.order_title}>{text.delivery}</h2>
                <p className={style.delivery_note}>{text.order_note}</p>
                <div className={style.order__header}>
                    <p className={style.order_title}>{text.discount}</p>
                    <p className={style.order_title}>0</p>
                </div>
                <h2 className={style.order_title}>{text.discount_code}</h2>
                <p className={style.delivery_note}>{text.promo_note}</p>
                <input 
                    value={form.phone}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "discount_code", 
                            value: e.target.value });
                        }}
                    type='text'
                />
                <p className={style.delivery_undernote}>{text.personal_info_note}</p>
                {/* тут */}
                <Modal modalName="orderModal">
                    <p className={style.modal_text}>{modalText.order.text}</p>   
                </Modal>
                <div 
                className={style.order__btns} 
                onClick={() => {
                    openModal('orderModal')
                    finishOrder()
                }}
                >
                    <LinkButtonOrangeWhite text={btns.order} link={''}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage