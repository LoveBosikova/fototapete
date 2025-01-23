import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';
import backImg from '../../../assets/subscribe-back.png'
import arrowImg from '../../../assets/subscribe-arrow.png'

import Title from '../../ui/title/title';
import SubscribeBtn from '../../ui/buttons/subscribeBtn/subscribeBtn';

import style from './subscribe.module.scss';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';

function Subscribe () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].subscribe

    return (
        <section className={style.subscribe}>

            <div className={style.backWrap}>
                <img className={style.backImg} src={backImg} alt='Interior with wallpapers' />
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
                <input className={style.input} type='text' name='name' id='name' placeholder={text.name}/>
                <input className={style.input} type='email' name='email' id='email' placeholder={text.email}/>
                <div className={style.btnWrap}>
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