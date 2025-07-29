import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'

import backLarge from '../../../assets/otherMain__big.png';

import Title from '../../ui/title/title'

// import home from '../../../assets/mission_home.png'
// import bisnes from '../../../assets/mission_bisness.png'
// import space from '../../../assets/mission_space.png';

import style from './otherMain.module.scss'


function OtherMain () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].otherMain

    return (
        <section className={style.otherMain}>
            <div className={style.backgroundWrap}>
                <picture className={style.backgroundImg} >
                    {/* <source
                        media="(max-width: 720px)"
                        srcSet={`${import.meta.env.BASE_URL}about_main_little.png 720w`}
                        sizes="720px"
                    /> */}
                    <source
                        media="(min-width: 1140px)"
                        srcSet={`${import.meta.env.BASE_URL}otherMain__big.png 1140w`}
                        sizes="1140px"
                    />
                    {/* <source
                        srcSet={`${import.meta.env.BASE_URL}about_main_medium.png 720w`}
                        sizes="720px"
                    /> */}
                    <img  className={style.backgroundImg} src={backLarge} />
                </picture>
            </div>
            <div className={style.content}>
                <Title text={text.title} isBlack={true}></Title>
                <p className={style.text}>{text.text}</p>
            </div>
        </section>
    )
}

export default OtherMain