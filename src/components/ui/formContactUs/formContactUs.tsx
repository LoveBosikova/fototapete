import { useContext } from 'react'
import style from './formContactUs.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import LinkButtonWhite from '../buttons/linkButton/linkBurronWhite'
import LinkButtonOrangeWhite from '../buttons/linkButton/linkBurronOrangeWhite'
import NotePrivacyPolicy from '../notePrivacyPolicy/notePrivacyPolicy'

function FormContactUs () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].form_contact_us
    const textBtns = textData[langValue as keyof typeof textData].btns
    return (
        <form className={style.form}>
            <h1 className={style.title}>{text.title}</h1>
            <p className={style.text}>{text.text}</p>
            <label className={style.label}>{text.name}</label>
            <input className={style.input} type='text' name='name' id='name'/>
            <label className={style.label}>{text.mail}</label>
            <input className={style.input} type='email' name='email' id='email'/>
            <label className={style.label}>{text.phone}</label>
            <input className={style.input} type='phone' name='phone' id='phone'/>

                <div className={style.btnWrap}>
                    <LinkButtonWhite link='' text={textBtns.send} />
                    <div className={style.notePrivacyPolicyWrap}>
                        <NotePrivacyPolicy />
                    </div>
                </div>

        </form>
    )
}

export default FormContactUs