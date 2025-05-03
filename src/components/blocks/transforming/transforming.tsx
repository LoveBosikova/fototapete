
import textData from '../../../texts';

import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import backgroundBig from '../../../assets/transforming-big.webp';

import style from './transforming.module.scss';

function Transforming () {

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();

    const text = textData[langValue as keyof typeof textData].transforming

    return (
        <section className={style.transforming}>
            <picture className={style.background} >
                <source
                    media="(max-width: 720px)"
                    srcSet="/transforming-small.png 720w"
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet="/transforming-big.webp 1140w"
                    sizes="1140px"
                />
                <source
                    srcSet="/transforming-medium.png 720w"
                    sizes="720px"
                />
                <img  className={style.background} src={backgroundBig} />
            </picture>
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