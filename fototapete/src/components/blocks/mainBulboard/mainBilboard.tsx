import { LangContext } from '../../../context/LangContext';


import { useContext } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';

import pointer from '../../../assets/pointer-bilboard.png';
import back from '../../../assets/mainBack.png';

import textData from '../../../texts';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();
    
    return (
        <div className={style.wrap}>
            <div className={style.backgroundWrap}><img className={style.backgroundImg} src={back} alt='' /></div>
            <div className={style.textWrap}>
                <Title text={textData[langValue].mainBillboard.title} isBlack={false}></Title>
                <div className={style.handwritingWrap}>
                    <div className={style.pointerWrap}>
                        <img className={style.pointerImg} src={pointer} alt='' />
                    </div>
                    <Handwriting color={'white'} text={textData[langValue].mainBillboard.handwriteTop}></Handwriting>
                    <div className={style.handwriteBottomWrap}>
                        <Handwriting color={'white'} text={textData[langValue].mainBillboard.handwriteBottom}></Handwriting>
                    </div>
                </div>
            </div>
            <div className={style.articleWrap}>
                <p className={style.articleText}>{textData[langValue].mainBillboard.article}</p>
                <div className={style.btnsWrap}>
                    <div className={style.linkOrangeBtnWrap}>
                        <LinkButtonOrange text={textData[langValue].btns.catalog} link={''}></LinkButtonOrange>
                    </div>
                    <div className={style.linkWhiteBtnWrap}>
                        <LinkButtonWhite text={textData[langValue].btns.individualOrder} link={''}></LinkButtonWhite>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBilboard