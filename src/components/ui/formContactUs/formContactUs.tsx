import { useContext } from 'react'
import style from './formContactUs.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import LinkButtonWhite from '../buttons/linkButton/linkBurronWhite'
import NotePrivacyPolicy from '../notePrivacyPolicy/notePrivacyPolicy'
import { $contact_form, changeContactForm, resetContactForm } from './model'
import { useUnit } from 'effector-react'
import { openModal } from '../modal/model'
import { Modal } from '../modal/Modal'

function FormContactUs () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].form_contact_us
    const textBtns = textData[langValue as keyof typeof textData].btns
    const modalText = textData[langValue as keyof typeof textData].modals
    const contact_form = useUnit($contact_form)

    return (
        <form className={style.form}>
            <h1 className={style.title}>{text.title}</h1>
            <p className={style.text}>{text.text}</p>
            <label 
            className={style.label}>
                {text.name}
                </label>
            <input 
            value={contact_form.name}
            className={style.input} 
            type='text' 
            name='name' 
            id='name'
            onChange={(e) => {
                changeContactForm({
                    key: "name",
                    value: e.target.value
                })
            }}
            />
            <label 
            className={style.label}>
                {text.mail}
            </label>
            <input 
            value={contact_form.email}
            className={style.input} 
            type='email' 
            name='email' 
            id='email'
            onChange={(e) => {
                changeContactForm({
                    key: "email",
                    value: e.target.value
                })
            }}
            />
            <label 
            className={style.label}>
                {text.phone}
            </label>
            <input 
            value={contact_form.phone}
            className={style.input} 
            type='phone' 
            name='phone' 
            id='phone'
            onChange={(e) => {
                changeContactForm({
                    key: "phone",
                    value: e.target.value
                })
            }}
            />
            <Modal modalName="contact">
                <h2>{modalText.subscribeSuccess.title}</h2>
                <p className={style.modal_text}>{modalText.subscribeSuccess.text}</p>   
            </Modal>
            <div className={style.btnWrap} onClick={(e)=> {
                    e.preventDefault()
                    openModal('contact')
                    resetContactForm()
                }}>
                <LinkButtonWhite link='' text={textBtns.send} />
                <div className={style.notePrivacyPolicyWrap}>
                    <NotePrivacyPolicy />
                </div>
            </div>
        </form>
    )
}

export default FormContactUs