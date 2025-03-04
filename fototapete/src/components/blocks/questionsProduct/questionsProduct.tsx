import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';
import AccordionItem from '../../ui/accordion/accordionItem';

import textData from '../../../texts';

import style from './questionsProduct.module.scss';

function QuestionsProduct () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].productPage.questions // get the productPage texts

    return (
        <section className={style.questionsProduct}>
            <ul className={style.questionsWrap}>
                <li className={style.questionWrap}>
                    <AccordionItem question={text[0]}></AccordionItem>
                </li>
                <li className={style.questionWrap}>
                    <AccordionItem question={text[1]}></AccordionItem>
                </li>
                <li className={style.questionWrap}>
                    <AccordionItem question={text[2]}></AccordionItem>
                </li>
                <li className={style.questionWrap}>
                    <AccordionItem question={text[3]}></AccordionItem>
                </li>
                <li className={style.questionWrap}>
                    <AccordionItem question={text[4]}></AccordionItem>
                </li>
            </ul>
        </section>
    )

}

export default QuestionsProduct