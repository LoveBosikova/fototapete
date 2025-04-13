import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'
import Title from '../../ui/title/title'
import textData from '../../../texts'
import LinkButtonOrangeWhite from '../../ui/buttons/linkButton/linkBurronOrangeWhite'
import Handwriting from '../../ui/handwriting/handwriting'
import style from './additionalServices.module.scss'
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack'

function AdditionalServices () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].infoPage
    const btnText = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.additionalServices}>
            <div className={style.titlewrap}>
                <Title text={text.process_title} isBlack={true}></Title>
                <div className={style.handwrite}>
                    <Handwriting text={text.process_handwriting} color={"orange"}/>
                </div>
            </div>
            <ul className={style.content}>
                <li className={style.card_beuge}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                </li>
                <li className={style.card_beuge}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                </li>
                <li className={style.card_beuge}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default AdditionalServices