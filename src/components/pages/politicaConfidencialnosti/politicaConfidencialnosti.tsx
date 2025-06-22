import { useContext } from "react"
import textData from "../../../texts"
import Title from "../../ui/title/title"
import { LangContext } from "../../../context/LangContext"
import style from './politicaConfidencialnosti.module.scss'

const PoliticaConfidencialnosti = () => {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].politicaConfidencialnostiPage
    return (
        <div className={style.politicaConfidencialnostiPage}>
            <>
                <section>
                    <Title isBlack={true} text={text.title}></Title>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section1.subtitle}</h2>
                        <p className={style.text}>{text.section1.text1}</p>
                        <p className={style.text}>{text.section1.text2}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section2.subtitle}</h2>
                        <p className={style.text}>{text.section2.text1}</p>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section2.point1.bold}</span>
                                {text.section2.point1.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section2.point2.bold}</span>
                                {text.section2.point2.text}
                            </li>
                        </ul>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section3.subtitle}</h2>
                        <p className={style.text}>{text.section3.text1}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section4.subtitle}</h2>
                        <p className={style.text}>{text.section4.text1}</p>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point1.bold}</span>
                                {text.section4.point1.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point2.bold}</span>
                                {text.section4.point2.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point3.bold}</span>
                                {text.section4.point3.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point4.bold}</span>
                                {text.section4.point4.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point5.bold}</span>
                                {text.section4.point5.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point6.bold}</span>
                                {text.section4.point6.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point7.bold}</span>
                                {text.section4.point7.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section4.point8.bold}</span>
                                {text.section4.point8.text}
                            </li>
                        </ul>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section5.subtitle}</h2>
                        <p className={style.text}>{text.section5.text1}</p>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section5.point1.bold}</span>
                                {text.section5.point1.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section5.point2.bold}</span>
                                {text.section5.point2.text}
                            </li>
                            <li className={style.item}>
                                <span className={style.bold}>{text.section5.point3.bold}</span>
                                {text.section5.point3.text}
                            </li>
                        </ul>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section6.subtitle}</h2>
                        <p className={style.text}>{text.section6.text1}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section7.subtitle}</h2>
                        <p className={style.text}>{text.section7.text1}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section8.subtitle}</h2>
                        <p className={style.text}>{text.section8.text1}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section9.subtitle}</h2>
                        <p className={style.text}>{text.section9.text1}</p>
                    </article>
                </section>

                <section>
                    <article className={style.article}>
                        <h2 className={style.subtitle}>{text.section10.subtitle}</h2>
                        <p className={style.text}>{text.section10.text1}</p>
                    </article>
                </section>
            </>

        </div>
    )
}

export default PoliticaConfidencialnosti