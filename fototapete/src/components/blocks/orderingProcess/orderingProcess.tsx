import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import interior1Big from '../../../assets/orderingProcess-interior1-big.png';
import interior2Big from '../../../assets/orderingProcess-interior2-big.png';

import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';
import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';

import textData from '../../../texts';

import style from './orderingProcess.module.scss';

function OrderingProcess () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].orderingProcess
    const btnText = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.orderingProcess}>
            <div className={style.titlesWrap}>
                <Title text={text.title} isBlack={true}></Title>
                <div className={style.handwriteWrap}>
                    <Handwriting text={text.handwrite} color={'orange'}></Handwriting>
                </div>
            </div>
                <div className={style.contentWrap}>
                    <div className={style.point1}>
                            <picture className={style.img} >
                                <source
                                    media="(max-width: 720px)"
                                    srcSet="/fototapete/orderingProcess-interior1-small.png 720w"
                                    sizes="720px"
                                />
                                <source
                                    media="(min-width: 1140px)"
                                    srcSet="/fototapete/orderingProcess-interior1-big.png 1140w"
                                    sizes="1140px"
                                />
                                <source
                                    srcSet="/fototapete/orderingProcess-interior1-medium.png 720w"
                                    sizes="720px"
                                />
                                <img  className={style.img} src={interior1Big} alt='Wallpaper interior'/>
                            </picture>
                    </div>
                    <div className={style.point2}>
                        <p className={style.pointText}>{text.point1}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonWhite text={btnText.learnMore} link={''}></LinkButtonWhite>
                        </div>
                    </div>
                    <div className={style.point3}>
                        <p className={style.pointText}>{text.point2}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                        </div>
                    </div>
                    <div className={style.point4}>
                        <p className={style.pointText}>{text.point3}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                        </div>
                    </div>
                    <div className={style.point5}>
                        <p className={style.pointText}>{text.point4}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonWhite text={btnText.learnMore} link={''}></LinkButtonWhite>
                        </div>
                    </div>
                    <div className={style.point6}>
                        <p className={style.pointText}>{text.point5}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                        </div>
                    </div>
                    <div className={style.point7}>
                        <p className={style.pointText}>{text.point6}</p>
                        <div className={style.btnWrap}>
                            <LinkButtonWhite text={btnText.learnMore} link={''}></LinkButtonWhite>
                        </div>
                    </div>
                    <div className={style.point8}>
                    <picture className={style.img} >
                                <source
                                    media="(max-width: 720px)"
                                    srcSet="/fototapete/orderingProcess-interior2-small.png 720w"
                                    sizes="720px"
                                />
                                <source
                                    media="(min-width: 1140px)"
                                    srcSet="/fototapete/orderingProcess-interior2-big.png 1140w"
                                    sizes="1140px"
                                />
                                <source
                                    srcSet="/fototapete/orderingProcess-interior2-medium.png 720w"
                                    sizes="720px"
                                />
                                <img  className={style.img} src={interior2Big} alt='Wallpaper interior'/>
                            </picture>
                        {/* <img className={style.img} src={interior2} alt='Wallpaper interior'></img> */}
                    </div>
                </div>
        </section>
    )
}

export default OrderingProcess