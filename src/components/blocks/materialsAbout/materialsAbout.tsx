import { useContext } from 'react'
import Title from '../../ui/title/title'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import img from '../../../assets/materialsPage_main.png'

import style from './materialsAbout.module.scss'

function MaterialsAbout () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].materialsPage
    return (
        <section className={style.materialsAbout}>
            <div className={style.titleWrap}>
                <Title isBlack={true} text={text.main_title} />
            </div>
            <article className={style.article}>
                <p className={style.text}>{text.main_sub_left}</p>
                <p className={style.text}>{text.main_sub_right}
                    <span className={style.span}>{text.main_sub_right_orange}</span>
                </p>
            </article>
            <div className={style.imgWrap}>
                <img className={style.img} src={img} alt={text.main_title} />
            </div>
        </section>
    )
}

export default MaterialsAbout