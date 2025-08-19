import { useContext, useEffect, useRef, useState } from 'react'
import styles from './instructionsPage.module.scss'
import { LangContext } from '../../../context/LangContext'
import backLarge from '../../../assets/instructions.png';
import textData from '../../../texts'
import Title from '../../ui/title/title'
import Handwriting from '../../ui/handwriting/handwriting';
import closeIcon from '../../../assets/btnClose.png';
import openIcon from '../../../assets/btnOpen.png';
import classNames from 'classnames';

const InstructionsPage = () => {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const containerRef = useRef<HTMLDivElement>(null);
    

    const text = textData[langValue as keyof typeof textData].instructionsPage

    const [ isOpen, setIsOpen ] = useState(true) // Always open for the first question
    const [ isOpen1, setIsOpen1 ] = useState(false)
    const [ isOpen2, setIsOpen2 ] = useState(false) 
    const [ isOpen3, setIsOpen3 ] = useState(false)
    const [ isOpen4, setIsOpen4 ] = useState(false) 

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <section 
        className={styles.instructionsPage} 
        ref={containerRef}>
            <div className={styles.mainBlock}>
                <picture className={styles.backgroundImg} >
                    <source
                        media="(max-width: 720px)"
                        srcSet={`${import.meta.env.BASE_URL}instructions-small.png`}
                        sizes="720px"
                        />
                        <source
                        media="(min-width: 1140px)"
                        srcSet={`${import.meta.env.BASE_URL}instructions-large.png`}
                        sizes="1140px"
                        />
                        <source
                        srcSet={`${import.meta.env.BASE_URL}instructions-medium.png`}
                        sizes="720px"
                        />
                    <img className={styles.backgroundImg} src={backLarge} />
                </picture>
                <div className={styles.main__content}>
                    <div className={styles.main__titleWrap}>
                        <Title text={text.title} isBlack={true}/>
                        <div className={styles.main__handwriteWrap}>
                            <Handwriting text={text.handwriteTop} color={"orange"}/>
                        </div>
                    </div>
                    <p className={styles.main__text}>{text.article}</p>
                </div>
            </div>
            <div className={styles.accordionSection}>
                <ul className={styles.accordion}>
                    <li className={isOpen? styles.accordionItemOpen : styles.accordionItemClosed} onClick={() => setIsOpen(!isOpen)}>
                        <div className={styles.contentWrap}>
                            <div className={styles.headerWrap}>
                                <h2 className={styles.accordionQuestion}>{text.points.before.question}</h2>
                                <div className={styles.btnWrap}>
                                    <img className={styles.img} src={isOpen? closeIcon : openIcon} alt='Open-close button' />
                                </div>
                            </div>
                            <div className={styles.answerWrap}>
                                {isOpen? 
                                    <div className={classNames(styles.accordionAnswer, styles.accordionAnswer__double,)}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.before.answer.text1}</p>
                                            <p className={styles.answer__text}>{text.points.before.answer.checkTitle}</p>
                                            <ul className={styles.answer__text}>
                                                {text.points.before.answer.checkPoints.map((i) => <li>{i}</li>)}
                                            </ul>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.before.answer.text2}</p>
                                            <p className={styles.answer__text}>{text.points.before.answer.text2}</p>
                                        </div>
                                    </div>
                                : null}
                            </div>
                        </div>
                    </li>

                    <li className={isOpen1? styles.accordionItemOpen : styles.accordionItemClosed} onClick={() => setIsOpen1(!isOpen1)}>
                        <div className={styles.contentWrap}>
                            <div className={styles.headerWrap}>
                                <h2 className={styles.accordionQuestion}>{text.points.howTo.question}</h2>
                                <div className={styles.btnWrap}>
                                    <img className={styles.img} src={isOpen1? closeIcon : openIcon} alt='Open-close button' />
                                </div>
                            </div>
                            <div className={styles.answerWrap}>
                                <div className={classNames(styles.accordionAnswer)}>
                                    { isOpen2 ? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text1}</p>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text2}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <ul className={styles.answer__text}>
                                                {text.points.howTo.answer.checkPoints.map((i) => <li>{i}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    : null}
                                    { isOpen1 ? 
                                        <div className={styles.answer}>
                                            <h3 className={styles.answer__t1}>{text.points.howTo.answer.title1}</h3>
                                            <h4>{text.points.howTo.answer.title2}</h4>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text3}</p>

                                            <h4>{text.points.howTo.answer.title3}</h4>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text4}</p>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text5}</p>
                                            <p className={styles.answer__text}>{text.points.howTo.answer.text6}</p>
                                        </div>
                                    : null}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={isOpen2? styles.accordionItemOpen : styles.accordionItemClosed} onClick={() => setIsOpen2(!isOpen2)}>
                        <div className={styles.contentWrap}>
                            <div className={styles.headerWrap}>
                                <h2 className={styles.accordionQuestion}>{text.points.howTo2.question}</h2>
                                <div className={styles.btnWrap}>
                                    <img className={styles.img} src={isOpen2? closeIcon : openIcon} alt='Open-close button' />
                                </div>
                            </div>
                            <div className={styles.answerWrap}>
                                <div className={classNames(styles.accordionAnswer)}>
                                    { isOpen2 ? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text1}</p>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text2}</p>
                                            <ul className={styles.answer__text}>
                                                {text.points.howTo2.answer.checkPoints.map((i) => <li>{i}</li>)}
                                            </ul>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text3}</p>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text4}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text5}</p>
                                            <ul className={styles.answer__text}>
                                                {text.points.howTo2.answer.checkPoints2.map((i) => <li>{i}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    :null }
                                    { isOpen2 ? 
                                        <div className={styles.answer}>
                                            <h3 className={styles.answer__t1}>{text.points.howTo2.answer.title3}</h3>
                                            <h4>{text.points.howTo2.answer.title4}</h4>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text6}</p>
                                            <h4>{text.points.howTo2.answer.title5}</h4>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text7}</p>
                                            <p className={styles.answer__text}>{text.points.howTo2.answer.text8}</p>
                                        </div>
                                    : null}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={isOpen3? styles.accordionItemOpen : styles.accordionItemClosed} onClick={() => setIsOpen3(!isOpen3)}>
                        <div className={styles.contentWrap}>
                            <div className={styles.headerWrap}>
                                <h2 className={styles.accordionQuestion}>{text.points.howTo3.question}</h2>
                                <div className={styles.btnWrap}>
                                    <img className={styles.img} src={isOpen3? closeIcon : openIcon} alt='Open-close button' />
                                </div>
                            </div>
                            <div className={styles.answerWrap}>
                                

                                <div className={classNames(styles.accordionAnswer)}>
                                    { isOpen3 ? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text1}</p>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text2}</p>
                                            <ul className={styles.answer__text}>
                                                {text.points.howTo3.answer.checkPoints.map((i) => <li>{i}</li>)}
                                            </ul>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text3}</p>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text4}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <h3 className={styles.answer__t1}>{text.points.howTo3.answer.title1}</h3>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text5}</p>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text6}</p>
                                            <ul className={styles.answer__text}>
                                                {text.points.howTo3.answer.checkPoints2.map((i) => <li>{i}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    :null }
                                    { isOpen3 ? 
                                        <div className={styles.answer}>
                                            <h3 className={styles.answer__t1}>{text.points.howTo3.answer.title2}</h3>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text7}</p>
                                            <p className={styles.answer__text}>{text.points.howTo3.answer.text8}</p>
                                        </div>
                                    : null}
                                </div>

                                
                            </div>
                        </div>
                    </li>

                    <li className={isOpen4? styles.accordionItemOpen : styles.accordionItemClosed} onClick={() => setIsOpen4(!isOpen4)}>
                        <div className={styles.contentWrap}>
                            <div className={styles.headerWrap}>
                                <h2 className={styles.accordionQuestion}>{text.points.howTo4.question}</h2>
                                <div className={styles.btnWrap}>
                                    <img className={styles.imgInstructions} src={isOpen4? closeIcon : openIcon} alt='Open-close button' />
                                </div>
                            </div>
                            <div className={styles.answerWrap}>
                                { isOpen4 ? 
                                        <div className={styles.answer}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text1}</p>
                                        </div>
                                    : null}
                                {isOpen4? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text2}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <img className={styles.imgInstructions} src={text.points.howTo4.answer.img1} alt='' />
                                        </div>
                                    </div>
                                :null}

                                {isOpen4? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text3}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <img className={styles.imgInstructions} src={text.points.howTo4.answer.img2} alt='' />
                                        </div>
                                    </div>
                                :null}

                                {isOpen4? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text4}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <img className={styles.imgInstructions} src={text.points.howTo4.answer.img3} alt='' />
                                        </div>
                                    </div>
                                :null}

                                
                                {isOpen4? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text5}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <img className={styles.imgInstructions} src={text.points.howTo4.answer.img4} alt='' />
                                        </div>
                                    </div>
                                :null}

                                {isOpen4? 
                                    <div className={styles.accordionAnswer__double}>
                                        <div className={styles.answer__half}>
                                            <p className={styles.answer__text}>{text.points.howTo4.answer.text6}</p>
                                        </div>
                                        <div className={styles.answer__half}>
                                            <img className={styles.imgInstructions} src={text.points.howTo4.answer.img5} alt='' />
                                        </div>
                                    </div>
                                :null}

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InstructionsPage