import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'

import backLarge from '../../../assets/other_form.png';

import Title from '../../ui/title/title'

import style from './otherOrder.module.scss'
import { useUnit } from 'effector-react';
import { $offer_form, $offer_form_errors, changeOfferErrorsForm, changeOfferForm, resetOfferForm, resetOfferFormErrors } from '../calculate/model';
import { openModal } from '../../ui/modal/model';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';
import { Modal } from '../../ui/modal/Modal';


function OtherOrder () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].otherOrder
    const modalText = textData[langValue as keyof typeof textData].modals.offer

    const offer_form = useUnit($offer_form)
    const offer_form_errors = useUnit($offer_form_errors)

    return (
        <section className={style.otherOrder}>
            <div className={style.backgroundWrap}>
                <picture className={style.backgroundImg} >
                    {/* <source
                        media="(max-width: 720px)"
                        srcSet={`${import.meta.env.BASE_URL}about_main_little.png 720w`}
                        sizes="720px"
                    /> */}
                    <source
                        media="(min-width: 1140px)"
                        srcSet={`${import.meta.env.BASE_URL}other_form.png 1140w`}
                        sizes="1140px"
                    />
                    {/* <source
                        srcSet={`${import.meta.env.BASE_URL}about_main_medium.png 720w`}
                        sizes="720px"
                    /> */}
                    <img  className={style.backgroundImg} src={backLarge} />
                </picture>
            </div>
            <div className={style.content}>
                <Title text={text.title} isBlack={true}></Title>
                <p className={style.text}>{text.text}</p>
            </div>

            <div className={style.formWrap}>
                <form 
                    className={style.modal__offer__form} 
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (!offer_form.name) {
                            changeOfferErrorsForm({
                                    key: "name",
                                    value: modalText.error_no_name,
                                    })
                            } else if (!offer_form.phone) {
                                changeOfferErrorsForm({
                                    key: "phone",
                                    value: modalText.error_no_phone,
                                    })
                            } else {
                                openModal('offes_success')
                                resetOfferFormErrors()
                                resetOfferForm()
                            } ;
                    }}
                    >
                        <label htmlFor='width'>
                            <input 
                            className={style.modal__offer__input}
                            name='name' 
                            id='name' 
                            placeholder={modalText.name} 
                            value={offer_form.name} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "name",
                                    value: e.target.value
                                })
                                changeOfferErrorsForm({
                                    key: "name",
                                    value: "",
                                })
                            }}
                            />
                            <p className={offer_form_errors.name ? style.error : style.error__hidden}>{offer_form_errors.name ? offer_form_errors.name : ""}</p>
                        </label>
                        <label htmlFor='phone'>
                            <input 
                            className={style.modal__offer__input}
                            name='phone' 
                            id='phone' 
                            placeholder={modalText.phone} 
                            value={offer_form.phone} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "phone",
                                    value: e.target.value
                                })
                                changeOfferErrorsForm({
                                    key: "phone",
                                    value: "",
                                })
                            }}
                            />
                            <p className={offer_form_errors.phone ? style.error : style.error__hidden}>{offer_form_errors.phone ? offer_form_errors.phone : ""}</p>
                        </label>
                        <label htmlFor='mail'>
                            <input 
                            className={style.modal__offer__input}
                            name='mail' 
                            id='mail' 
                            placeholder={modalText.email} 
                            value={offer_form.mail} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "mail",
                                    value: e.target.value
                                })
                            }}
                            />
                        </label>
                        <label htmlFor='request'>
                            <textarea 
                            className={style.modal__offer__input}
                            name='request' 
                            id='request' 
                            placeholder={modalText.request} 
                            value={offer_form.request} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "request",
                                    value: e.target.value
                                })
                            }}
                            />
                        </label>
                        <div className={style.modal__offer__btnWrap}>
                            <LinkButtonOrange type='submit' text={modalText.send}/>
                        </div>
                        <NotePrivacyPolicy color="black" text={'By clicking «Send» you agree with the'} />
                    </form>
                    <Modal modalName="offes_success">
                        <h2>{modalText.offer_success}</h2>
                    </Modal>
            </div>
        </section>
    )
}

export default OtherOrder