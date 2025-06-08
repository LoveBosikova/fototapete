import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';
import backImgBig from '../../../assets/subscribe-back-big.png';

import arrowImg from '../../../assets/subscribe-arrow.png'

import Title from '../../ui/title/title';
import SubscribeBtn from '../../ui/buttons/subscribeBtn/subscribeBtn';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';

import style from './subscribe.module.scss';
import { $subscribe_form, changeSubscribeForm, resetSubscribeForm } from './model';
import { useUnit } from 'effector-react';
import { Modal } from '../../ui/modal/Modal';
import { openModal } from '../../ui/modal/model';

function Subscribe () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].subscribe
    const modalText = textData[langValue as keyof typeof textData].modals
    const subscribe_form = useUnit($subscribe_form)

    return (
        <section className={style.subscribe}>
            <div className={style.backWrap}>
            <picture className={style.backImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet={`${import.meta.env.BASE_URL}subscribe-back-small.png 720w`}
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet={`${import.meta.env.BASE_URL}subscribe-back-big.png 1140w`}
                    sizes="1140px"
                />
                <source
                    srcSet={`${import.meta.env.BASE_URL}subscribe-back-medium.png 720w`}
                    sizes="720px"
                />
                <img  className={style.backImg} src={backImgBig} />
            </picture>
            </div>
            <div className={style.note}>
                <p className={style.noteStar}>*</p>
                <p className={style.noteText}>{text.note}</p>
            </div>
            <div className={style.arrowWrap}>
                <img className={style.img} src={arrowImg} alt='' />
            </div>
            <div className={style.titleWrap}>
                <Title text={text.title} isBlack={true}></Title>
            </div>
            <div className={style.formsWrap}>
                <input 
                className={style.input} 
                type='text' 
                name='name' 
                id='name' 
                placeholder={text.name}
                value={subscribe_form.name}
                onChange={(e) => {
                    changeSubscribeForm({
                        key: "name",
                        value: e.target.value,
                    })
                }}
                />
                <input 
                className={style.input} 
                type='email' 
                name='email' 
                id='email' 
                placeholder={text.email}
                value={subscribe_form.email}
                onChange={(e) => {
                    changeSubscribeForm({
                        key: "email",
                        value: e.target.value,
                    })
                }}
                />
                <Modal modalName="subscriben">
                    <h2>{modalText.subscribeSuccess.title}</h2>
                    <p className={style.modal_text}>{modalText.subscribeSuccess.text}</p>   
                </Modal>
                <div className={style.btnWrap} 
                onClick={(e) => {
                    e.preventDefault()
                    openModal('subscriben')
                    resetSubscribeForm()
                }}
                >
                    <SubscribeBtn link={''}></SubscribeBtn>
                    <div className={style.notePrivacyPolicyWrap}>
                        <NotePrivacyPolicy></NotePrivacyPolicy>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe