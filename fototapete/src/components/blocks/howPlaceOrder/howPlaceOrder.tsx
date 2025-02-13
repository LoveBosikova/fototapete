import { useContext } from 'react';
import Title from '../../ui/title/title';
import style from './howPlaceOrder.module.scss';
import { LangContext } from '../../../context/LangContext';
import textData from '../../../texts';

function HowPlaceOrder () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].howToPlace

    return (
        <section className={style.howPlaceOrder}>
            <Title text={text.title} isBlack={true}></Title>
            <ul className={style.contentWrap}>
                <li className={style.card1}>
                    <h2 className={style.number}>1:</h2>
                    <div className={style.cardContent}>
                        <h3 className={style.cardTitle}>{text.step1Title}</h3>
                        <p className={style.cardText}>{text.step1Text}</p>
                    </div>
                </li>
                <li className={style.card2}>
                    <h2 className={style.number}>2:</h2>
                    <div className={style.cardContent}>
                        <h3 className={style.cardTitle}>{text.step2Title}</h3>
                        <p className={style.cardText}>{text.step2Text}</p>
                    </div>
                </li>
                <li className={style.card3}>
                    <h2 className={style.number}>3:</h2>
                    <div className={style.cardContent}>
                        <h3 className={style.cardTitle}>{text.step3Title}</h3>
                        <p className={style.cardText}>{text.step3Text}</p>
                    </div>
                </li>
                <li className={style.card4}>
                    <h2 className={style.number}>4:</h2>
                    <div className={style.cardContent}>
                        <h3 className={style.cardTitle}>{text.step4Title}</h3>
                        <p className={style.cardText}>{text.step4Text}</p>
                    </div>
                </li>
                <li className={style.card5}>
                    <h2 className={style.number}>5:</h2>
                    <div className={style.cardContent}>
                        <h3 className={style.cardTitle}>{text.step5Title}</h3>
                        <p className={style.cardText}>{text.step5Text}</p>  
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default HowPlaceOrder