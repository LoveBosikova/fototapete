import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'

import other1 from '../../../assets/other1.png';
import other2 from '../../../assets/other2.png';
import other3 from '../../../assets/other3.png';

import textData from '../../../texts'

import style from './otherKinds.module.scss'
import { useParams } from 'react-router-dom';


function OtherKinds () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const { id } = useParams()
    const text = id ? textData[langValue as keyof typeof textData].otherKinds[Number(id)] : textData[langValue as keyof typeof textData].otherKinds[0]
    // const text = textData[langValue as keyof typeof textData].otherKinds

    return (
        <ul className={style.otherKinds}>
            <li className={style.otherCard}>
                <div className={style.cardContent}>
                    <h2 className={style.title}>{text.thermalTitle}</h2>
                    <p className={style.text}>{text.thermalText}</p>
                </div>
            </li>

            <li className={style.otherCard}>
                <img className={style.img} src={other1} alt={text.thermalTitle} />
            </li>

            <li className={style.otherCard}>
                <img className={style.img} src={other2} alt={text.thermalTitle} />
            </li>

            <li className={style.otherCard}>
                <div className={style.cardContent}>
                    <h2 className={style.title}>{text.uvTitle}</h2>
                    <p className={style.text}>{text.uvText}</p>
                </div>
            </li>

            <li className={style.otherCard}>
                <div className={style.cardContent}>
                    <h2 className={style.title}>{text.mirrorTitle}</h2>
                    <p className={style.text}>{text.mirrorText}</p>
                </div>
            </li>

            <li className={style.otherCard}>
                <img className={style.img} src={other3} alt={text.thermalTitle} />
            </li>
        </ul>
    )
}

export default OtherKinds