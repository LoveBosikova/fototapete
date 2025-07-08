import { useContext, useState } from 'react';
import closeIcon from '../../../assets/btnClose.png';
import openIcon from '../../../assets/btnOpen.png';

import style from './accordionItem.module.scss';
import { LangContext } from '../../../context/LangContext';
import textData from '../../../texts';

type IAccordionItemPros = {
    question: {
        question: string,
        answer: string,
    }
}

function AccordionItem (props: IAccordionItemPros) {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const firstQuestion = textData[langValue as keyof typeof textData].commonQuestions.quesions[0].question // Get the first question

    const { answer, question } = props.question

    const [ isOpen, setIsOpen ] = useState(question == firstQuestion ? true : false) // Always open for the first question

    return (
        <li className={isOpen? style.accordionItemOpen : style.accordionItemClosed} onClick={() => setIsOpen(!isOpen)}>
            <div className={style.contentWrap}>
                <div className={style.headerWrap}>
                    <h2 className={style.accordionQuestion}>{question}</h2>
                    <div className={style.btnWrap}>
                        <img className={style.img} src={isOpen? closeIcon : openIcon} alt='Open-close button' />
                    </div>
                </div>
                <div className={style.answerWrap}>
                    <p className={style.accordionAnswer}>{answer}</p>
                </div>
            </div>
        </li>
    )
}

export default AccordionItem