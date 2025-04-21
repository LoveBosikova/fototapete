import { useContext } from 'react'
import Title from '../../ui/title/title'
import style from './materials.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack'
import smooth_adhesive_based from'../../../assets/smooth_adhesive_based.jpg'
import smooth_self_adhesive from '../../../assets/smooth_self_adhesive.jpg'
import textured_adhesive_based from '../../../assets/textured_adhesive_based.jpg'
import textured_self_adhesive from '../../../assets/textured_self_adhesive.jpg'
import self_adhesive_smooth_with_lamination from '../../../assets/self_adhesive_smooth_with_lamination.jpg'
import self_adhesive_smooth_with_extra_protection from '../../../assets/self_adhesive_smooth_with_extra_protection.jpg'

function Materials () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].materialsPage
    const textBtns = textData[langValue as keyof typeof textData].btns
    return (
        <section className={style.materials}>
            <Title isBlack={true} text={text.materisla_title} />
            <ul className={style.materials__list}>
                <li className={style.material}>
                    <div className={style.titleWrap}>
                        <h2 className={style.material__title}>{text.smooth_adhesive_based.title}</h2>
                        <ul className={style.material__points}>
                            {text.smooth_adhesive_based.points.map((point) => <li className={style.material__point}>{point}</li>)}
                        </ul>
                        <p className={style.material__description}>{text.smooth_adhesive_based.about}</p>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={smooth_adhesive_based} alt='' />
                        </div>
                    </div>
                </li>

                <li className={style.material}>
                    <div className={style.titleWrap}>
                        <h2 className={style.material__title}>{text.smooth_self_adhesive.title}</h2>
                        <ul className={style.material__points}>
                            {text.smooth_self_adhesive.points.map((point) => <li className={style.material__point}>{point}</li>)}
                        </ul>
                        <p className={style.material__description}>{text.smooth_self_adhesive.about}</p>

                    </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={smooth_self_adhesive} alt='' />
                        </div>
                    </div>
                </li>

                <li className={style.material}>
                <div className={style.titleWrap}>
                    <h2 className={style.material__title}>{text.textured_adhesive_based.title}</h2>
                    <ul className={style.material__points}>
                        {text.textured_adhesive_based.points.map((point) => <li className={style.material__point}>{point}</li>)}
                    </ul>
                    <p className={style.material__description}>{text.textured_adhesive_based.about}</p>
                </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={textured_adhesive_based} alt='' />
                        </div>
                    </div>
                </li>

                <li className={style.material}>
                <div className={style.titleWrap}>
                    <h2 className={style.material__title}>{text.textured_self_adhesive.title}</h2>
                    <ul className={style.material__points}>
                        {text.textured_self_adhesive.points.map((point) => <li className={style.material__point}>{point}</li>)}
                    </ul>
                    <p className={style.material__description}>{text.textured_self_adhesive.about}</p>

                </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={textured_self_adhesive} alt='' />
                        </div>
                    </div>
                </li>

                <li className={style.material}>
                <div className={style.titleWrap}>
                    <h2 className={style.material__title}>{text.self_adhesive_smooth_with_lamination.title}</h2>
                    <ul className={style.material__points}>
                        {text.self_adhesive_smooth_with_lamination.points.map((point) => <li className={style.material__point}>{point}</li>)}
                    </ul>
                    <p className={style.material__description}>{text.self_adhesive_smooth_with_lamination.about}</p>
                </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={self_adhesive_smooth_with_lamination} alt='' />
                        </div>
                    </div>
                </li>

                <li className={style.material}>
                <div className={style.titleWrap}>
                    <h2 className={style.material__title}>{text.self_adhesive_smooth_with_extra_protection.title}</h2>
                    <ul className={style.material__points}>
                        {text.self_adhesive_smooth_with_extra_protection.points.map((point) => <li className={style.material__point}>{point}</li>)}
                    </ul>
                    <p className={style.material__description}>{text.self_adhesive_smooth_with_extra_protection.about}</p>

                </div>
                    <div className={style.bottom}>
                        <div className={style.btn}>
                            <LinkButtonBlack link={''} text={textBtns.readMore} />
                        </div>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={self_adhesive_smooth_with_extra_protection} alt='' />
                        </div>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Materials