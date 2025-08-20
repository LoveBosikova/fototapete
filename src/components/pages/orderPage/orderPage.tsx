import { useContext, useEffect } from 'react'
import textData from '../../../texts'
import { LangContext } from '../../../context/LangContext'
import style from './orderPage.module.scss'
import { $form, $offer_errors, changeOfferError, changeTaskForm, resetOfferErrors, resetOfferForm } from './model'
import { useUnit } from 'effector-react'
import SubcategoryCheckbox from '../../ui/subcategoryCheckbox/subcategoryCheckbox'
import OrderItem from '../../ui/orderItem/orderItem'
import LinkButtonOrangeWhite from '../../ui/buttons/linkButton/linkBurronOrangeWhite'
import { $additionalInCart, $cart, $totalPrice, finishOrder } from '../cart/model'
import { Modal } from '../../ui/modal/Modal'
import { openModal } from '../../ui/modal/model'
import { useNavigate } from 'react-router-dom'
import OrderAdditionslItem from '../../ui/orderItem/orderAdditionalItem'

function OrderPage () {
    const { lang } = useContext(LangContext)
    const navigate = useNavigate();
    const langValue = lang.value.toLowerCase()
    const form = useUnit($form)
    const cart = useUnit($cart)
    const additionalInCart = useUnit($additionalInCart)
    const totalPrice = useUnit($totalPrice)
    const errors = useUnit($offer_errors)
    
    const text = textData[langValue as keyof typeof textData].orderPage
    const btns = textData[langValue as keyof typeof textData].btns
    const modalText = textData[langValue as keyof typeof textData].modals
    const errorText = textData[langValue as keyof typeof textData].errors

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
                onSubmit={(e) => {
                    e.preventDefault()
                    if (!form.first_name) {
                        changeOfferError({
                            key: "first_name",
                            value: errorText.firstName,
                            })
                        } 
                        else if (!form.last_name) {
                            changeOfferError({
                                key: "last_name",
                                value: errorText.lastName,
                            })
                        } 
                        else if (!form.email) {
                            changeOfferError({
                                key: "email",
                                value: errorText.email,
                            })
                        } 
                        else if (!form.phone) {
                            changeOfferError({
                                key: "phone",
                                value: errorText.phone,
                            })
                        } 
                        else if (!form.city) {
                            changeOfferError({
                                key: "city",
                                value: errorText.city,
                            })
                        } 
                        else if (!form.address) {
                            changeOfferError({
                                key: "address",
                                value: errorText.address,
                            })
                        } 
                        else if (!form.postal_code) {
                            changeOfferError({
                                key: "postal_code",
                                value: errorText.postalCode,
                            })
                        } 
                        else if (!form.isPrivate && !form.company) {
                            changeOfferError({
                                key: "company",
                                value: errorText.company,
                            })
                        } 
                        else if (!form.isPrivate && !form.OIB) {
                            changeOfferError({
                                key: "OIB",
                                value: errorText.oib,
                            })
                        } 
                        else {
                            openModal('orderModal')
                            finishOrder()
                            resetOfferErrors()
                            resetOfferForm()
                        } ;
                }}
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
                            <input //@ts-ignore
                            value={form.first_name}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "first_name", 
                                    value: e.target.value })
                                changeOfferError({
                                    key: "first_name",
                                    value: "",
                                })
                            }}
                            type='text'
                            />
                            <p className={errors.first_name ? style.error : style.error__hidden}>{errors.first_name ? errors.first_name : ""}</p>
                        </div>
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.last_name}</p>
                            <input //@ts-ignore
                            value={form.last_name}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "last_name", 
                                    value: e.target.value 
                                })
                                changeOfferError({
                                    key: "last_name",
                                    value: "",
                                })
                            }}
                            type='text'
                            />
                            <p className={errors.last_name ? style.error : style.error__hidden}>{errors.last_name ? errors.last_name : ""}</p>
                        </div>
                    </div>
                    <p className={style.form_label}>{text.email}</p>
                    <input //@ts-ignore
                    value={form.email}
                    onChange={(e) => {
                        changeTaskForm({ key: "email", value: e.target.value });
                        changeOfferError({
                            key: "email",
                            value: "",
                        })
                    }}
                    type='text' 
                    />
                    <p className={errors.email ? style.error : style.error__hidden}>{errors.email ? errors.email : ""}</p>

                    <p className={style.form_label}>{text.phone_number}</p>
                    <input //@ts-ignore
                    value={form.phone}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "phone", 
                            value: e.target.value 
                        });
                        changeOfferError({
                            key: "phone",
                            value: "",
                        })
                        }}
                    type='text'
                    />
                    <p className={errors.phone ? style.error : style.error__hidden}>{errors.phone ? errors.phone : ""}</p>

                    <h2 className={style.form_title}>{text.shippnig_information}</h2>
                    {!form.isPrivate ? 
                        <>
                        <p className={style.form_label}>{text.company}</p>
                            <input //@ts-ignore
                            value={form.company}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "company", 
                                    value: e.target.value 
                                });
                                changeOfferError({
                                    key: "company",
                                    value: "",
                                })
                            }}
                            type='text'
                            />
                        <p className={errors.company ? style.error : style.error__hidden}>{errors.company ? errors.company : ""}</p>

                        </>
                    : null}

                    <div className={style.row}>
                        {form.isPrivate ? 
                            <div className={style.halfrow}>
                            <p className={style.form_label}>{text.country}</p>
                            <input //@ts-ignore
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
                        <input //@ts-ignore
                        value={form.OIB}
                        onChange={(e) => {
                            changeTaskForm({ 
                                key: "OIB", 
                                value: e.target.value 
                            });
                            changeOfferError({
                                key: "OIB",
                                value: "",
                            })
                        }}
                        type='text'
                        />
                        <p className={errors.OIB ? style.error : style.error__hidden}>{errors.OIB ? errors.OIB : ""}</p>

                        </div>}
                        
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.city}</p>
                            <input //@ts-ignore
                            value={form.city}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "city", 
                                    value: e.target.value 
                                });
                                changeOfferError({
                                    key: "city",
                                    value: "",
                                })
                            }}
                            type='text'
                        />
                        <p className={errors.city ? style.error : style.error__hidden}>{errors.city ? errors.city : ""}</p>

                        </div>
                    </div>
                    <p className={style.form_label}>{text.address}</p>
                    <input //@ts-ignore
                    value={form.address}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "address", 
                            value: e.target.value 
                        });
                        changeOfferError({
                            key: "address",
                            value: "",
                        })
                        }}
                    type='text'
                    />
                    <p className={errors.address ? style.error : style.error__hidden}>{errors.address ? errors.address : ""}</p>

                    <div className={style.row}>
                        <div className={style.halfrow}>
                            <p className={style.form_label}>{text.postal_code}</p>
                            <input //@ts-ignore
                            value={form.postal_code}
                            onChange={(e) => {
                                changeTaskForm({ 
                                    key: "postal_code", 
                                    value: e.target.value 
                                });
                                changeOfferError({
                                    key: "postal_code",
                                    value: "",
                                })
                            }}
                            type='text'
                            />
                            <p className={errors.postal_code ? style.error : style.error__hidden}>{errors.postal_code ? errors.postal_code : ""}</p>

                        </div>
                        <div className={style.halfrow}>
                        <p className={style.form_label}>{text.district}</p>
                            <input //@ts-ignore
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
                            <SubcategoryCheckbox isActive={!!form.invoice_address}/>
                        </div>
                        <p className={style.form_label}>{text.invoice_address}</p>
                        </div>
                        {
                        form.invoice_address && 
                        <>
                            <div className={style.row}>
                                <div className={style.halfrow}>
                                    <p className={style.form_label}>{text.first_name}</p>
                                    <input //@ts-ignore
                                    value={form.first_name}
                                    onChange={(e) => {
                                        changeTaskForm({ 
                                            key: "first_name", 
                                            value: e.target.value })
                                        }}
                                    type='text'
                                    />
                                    <p className={errors.first_name ? style.error : style.error__hidden}>{errors.first_name ? errors.first_name : ""}</p>
                                </div>
                                <div className={style.halfrow}>
                                <p className={style.form_label}>{text.last_name}</p>
                                    <input //@ts-ignore
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
                                <p className={style.form_label}>{text.country}</p>
                                <input //@ts-ignore
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
                                <input //@ts-ignore
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
                            <input //@ts-ignore
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
                                    <input //@ts-ignore
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
                                    <input //@ts-ignore
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
                    {additionalInCart.map((item : any) => <OrderAdditionslItem {...item} /> )}
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
                <input //@ts-ignore
                    value={form.discount_code}
                    onChange={(e) => {
                        changeTaskForm({ 
                            key: "discount_code", 
                            value: e.target.value });
                        }}
                    type='text'
                />
                <p className={style.delivery_undernote}>{text.personal_info_note}</p>

                <Modal modalName="orderModal" onClose={() => {
                        navigate('/catalog');
                    }}>
                    <p className={style.modal_text} >{modalText.order.text}</p>   
                </Modal>
                <div 
                className={style.order__btns} 
                onClick={(e) => {
                    e.preventDefault()
                    if (!form.first_name) {
                        changeOfferError({
                            key: "first_name",
                            value: errorText.firstName,
                            })
                        } 
                        else if (!form.last_name) {
                            changeOfferError({
                                key: "last_name",
                                value: errorText.lastName,
                            })
                        } 
                        else if (!form.email) {
                            changeOfferError({
                                key: "email",
                                value: errorText.email,
                            })
                        } 
                        else if (!form.phone) {
                            changeOfferError({
                                key: "phone",
                                value: errorText.phone,
                            })
                        } 
                        else if (!form.city) {
                            changeOfferError({
                                key: "city",
                                value: errorText.city,
                            })
                        } 
                        else if (!form.address) {
                            changeOfferError({
                                key: "address",
                                value: errorText.address,
                            })
                        } 
                        else if (!form.postal_code) {
                            changeOfferError({
                                key: "postal_code",
                                value: errorText.postalCode,
                            })
                        } 
                        else if (!form.isPrivate && !form.company) {
                            changeOfferError({
                                key: "company",
                                value: errorText.company,
                            })
                        } 
                        else if (!form.isPrivate && !form.OIB) {
                            changeOfferError({
                                key: "OIB",
                                value: errorText.oib,
                            })
                        } 
                        else {
                            openModal('orderModal')
                            finishOrder()
                            resetOfferErrors()
                            resetOfferForm()
                        } ;
                }}
                >
                    <LinkButtonOrangeWhite type="submit" text={btns.order} link={''}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage