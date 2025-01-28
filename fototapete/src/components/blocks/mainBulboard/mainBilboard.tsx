import { LangContext } from '../../../context/LangContext';


import { useContext } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';

import pointer from '../../../assets/pointer-bilboard.png';
import backLarge from '../../../assets/mainBack-large.png';
import mediumLarge from '../../../assets/mainBack-medium.png';
import smallLarge from '../../../assets/mainBack-small.png';




import textData from '../../../texts';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();
    
    return (
        <div className={style.wrap}>
            <div className={style.backgroundWrap}>
            <picture className={style.backgroundImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet="/fototapete/mainBack-small.png 720w"
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet="/fototapete/mainBack-large.png 1140w"
                    sizes="1140px"
                />
                <source
                    srcSet="/fototapete/mainBack-medium.png 720w"
                    sizes="720px"
                />
                <img  className={style.backgroundImg} src={backLarge} />
            </picture>
                {/* <img className={style.backgroundImg} src={backLarge} alt='' /> */}
            </div>
            <div className={style.textWrap}>
                <div className={style.titleWrap}>
                    <Title text={textData[langValue as keyof typeof textData].mainBillboard.title} isBlack={false}></Title>
                </div>
                <div className={style.handwritingWrap}>
                    <div className={style.pointerWrap}>
                        <img className={style.pointerImg} src={pointer} alt='' />
                    </div>
                    <Handwriting color={'white'} text={textData[langValue as keyof typeof textData].mainBillboard.handwriteTop}></Handwriting>
                    <div className={style.handwriteBottomWrap}>
                        <Handwriting color={'white'} text={textData[langValue as keyof typeof textData].mainBillboard.handwriteBottom}></Handwriting>
                    </div>
                </div>
            </div>
            <div className={style.articleWrap}>
                <p className={style.articleText}>{textData[langValue as keyof typeof textData].mainBillboard.article}</p>
                <div className={style.btnsWrap}>
                    <div className={style.linkOrangeBtnWrap}>
                        <LinkButtonOrange text={textData[langValue as keyof typeof textData].btns.catalog} link={''}></LinkButtonOrange>
                    </div>
                    <div className={style.linkWhiteBtnWrap}>
                        <LinkButtonWhite text={textData[langValue as keyof typeof textData].btns.individualOrder} link={''}></LinkButtonWhite>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBilboard