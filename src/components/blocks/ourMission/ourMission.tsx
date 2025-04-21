import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import Title from '../../ui/title/title'

import home from '../../../assets/mission_home.png'
import bisnes from '../../../assets/mission_bisness.png'
import space from '../../../assets/mission_space.png';

import style from './ourMission.module.scss'


function OurMission () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].infoPage
    return (
        <section className={style.ourMission}>
            <div className={style.titleWrap}>
                <Title text={text.mission_title} isBlack={true}></Title>
            </div>
            <ul className={style.content}>
                <li className={style.card_first}>
                    <p className={style.card_title}>{text.mission_card1}</p>
                    <div className={style.imgWrap}>
                        <img className={style.img} src={home} alt={text.mission_card1} />
                    </div>
                </li>
                <li className={style.card_second}>
                    <p className={style.card_title}>{text.mission_card2}</p>
                    <div className={style.imgWrap}>
                        <img className={style.img} src={bisnes} alt={text.mission_card2} />
                    </div>
                </li>
                <li className={style.card_orange}>
                    <p className={style.card_title_orange}>{text.mission_card3}</p>
                    <div className={style.imgWrap}>
                        <img className={style.img} src={space} alt={text.mission_card3} />
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default OurMission