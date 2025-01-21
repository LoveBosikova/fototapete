
import textData from '../../../texts';

import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import background from '../../../assets/transforming.webp';

import style from './transforming.module.scss';

function Transforming () {

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();

    const text = textData[langValue].transforming

    return (
        <section className={style.transforming}>
            <img className={style.background} src={background} alt='' />
            <div className={style.header}>
                <div className={style.titleWrap}>
                    <Title text={text.title} isBlack={true}></Title>
                </div>
                <div className={style.hanwriteWrap}>
                    <Handwriting text={text.handwriteTop} color={'orange'}></Handwriting>
                </div>
            </div>
            <div className={style.customSizes}>
                <h2 className={style.articleTitle}>{text.articleTitle1}</h2>
                <p className={style.articleText}>{text.articleText1}</p>
            </div>
            <div className={style.individualApproach}>
                <h2 className={style.articleTitle}>{text.articleTitle2}</h2>
                <p className={style.articleText}>{text.articleText2}</p>
            </div>
            <div className={style.range}>
                <h2 className={style.articleTitle}>{text.articleTitle3}</h2>
                <p className={style.articleText}>{text.articleText3}</p>
            </div>
            <div className={style.installationService}>
                <h2 className={style.articleTitle}>{text.articleTitle4}</h2>
                <p className={style.articleText}>{text.articleText4}</p>
            </div>
            <div className={style.fastDelivery}>
                <h2 className={style.articleTitle}>{text.articleTitle5}</h2>
                <p className={style.articleText}>{text.articleText5}</p>
            </div>
        </section>
    )
}

export default Transforming