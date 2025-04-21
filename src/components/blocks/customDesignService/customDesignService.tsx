import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import textData from '../../../texts';
import interiorImg from '../../../assets/customDesignService.png';

import style from './customDesignService.module.scss';

function CustomDesignService () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const textProductPage = textData[langValue as keyof typeof textData].productPage

    return (
        <section className={style.customDesignService}>
            <div className={style.titleWrap}>
                <Title text={textProductPage.customDesignServiceTitle} isBlack={true} />
                <div className={style.handwriteWrap}>
                    <Handwriting text={textProductPage.handwriting} color={'orange'}></Handwriting>
                </div>
            </div>
            <ul className={style.contentWrap}>
                <li className={style.cardBeuge}>
                    <p className={style.text}> {textProductPage.point1} </p>
                </li>
                <li className={style.cardOrange}>
                    <p className={style.text}> {textProductPage.point2} </p>
                </li>
                <li className={style.cardImg}>
                    <img 
                    src={interiorImg} 
                    alt={textProductPage.customDesignServiceTitle}
                    className={style.img}>
                    </img>
                </li>
            </ul>
        </section>
    )
}

export default CustomDesignService