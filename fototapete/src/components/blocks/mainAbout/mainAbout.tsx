import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';

import backLarge from '../../../assets/about_main.png';
import textData from '../../../texts';

import style from './mainAbout.module.scss';

function MainAbout () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].infoPage
    
    return (
        <div className={style.mainAbout}>
            <div className={style.backgroundWrap}>
            <picture className={style.backgroundImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet="/fototapete/about_main.png 720w"
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet="/fototapete/about_main.png 1140w"
                    sizes="1140px"
                />
                <source
                    srcSet="/fototapete/about_main.png 720w"
                    sizes="720px"
                />
                <img  className={style.backgroundImg} src={backLarge} />
            </picture>
            </div>
            <div className={style.textWrap}>
                <div className={style.titleWrap}>
                    <Title text={text.main_title} isBlack={true}></Title>
                </div>
                <div className={style.handwritingWrap}>
                    <Handwriting color={'orange'} text={text.main_handwritind}></Handwriting>
                    <p className={style.note}>{text.main_localized}</p>
                </div>
            </div>
        </div>
    )
}

export default MainAbout