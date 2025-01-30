import { useState } from 'react';
import closeIcon from '../../../assets/btnClose.png';
import openIcon from '../../../assets/btnOpen.png';

import style from './accordionItem.module.scss';

type IAccordionItemPros = {
    question: {
        question: string,
        answer: string,
    }
}

function AccordionItem (props: IAccordionItemPros) {
    const { answer, question } = props.question;

    const [ isOpen, setIsOpen ] = useState(false);

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