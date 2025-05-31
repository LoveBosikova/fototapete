import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';
import backImgBig from '../../../assets/subscribe-back-big.png';

import arrowImg from '../../../assets/subscribe-arrow.png'

import Title from '../../ui/title/title';
import SubscribeBtn from '../../ui/buttons/subscribeBtn/subscribeBtn';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';

import style from './subscribe.module.scss';

function Subscribe () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].subscribe

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