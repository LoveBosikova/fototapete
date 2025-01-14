import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';
import pointer from '../../../assets/pointer-bilboard.png';

import { useContext } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';

import style from './mainBilboard.module.scss';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';

function MainBilboard () {

    const { lang } = useContext(LangContext);

    return (
        <div className={style.wrap}>
            <div className={style.textWrap}>
                <Title text={textData[lang].mainPage.title} isBlack={false}></Title>
                <div className={style.handwritingWrap}>
                    <div className={style.pointerWrap}>
                        <img className={style.pointerImg} src={pointer} alt='' />
                    </div>
                    <Handwriting color={'white'} text={textData[lang].mainPage.handwriteTop}></Handwriting>
                    <div className={style.handwriteBottomWrap}>
                        <Handwriting color={'white'} text={textData[lang].mainPage.handwriteBottom}></Handwriting>
                    </div>
                </div>
            </div>
            <div className={style.articleWrap}>
                <p className={style.articleText}>{textData[lang].mainPage.article}</p>
                <div className={style.btnsWrap}>
                    <div className={style.linkOrangeBtnWrap}>
                        <LinkButtonOrange text={textData[lang].btns.catalog} link={''}></LinkButtonOrange>
                    </div>
                    <div className={style.linkWhiteBtnWrap}>
                        <LinkButtonWhite text={textData[lang].btns.individualOrder} link={''}></LinkButtonWhite>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBilboard