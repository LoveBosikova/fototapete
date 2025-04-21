import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import Accordion from '../../ui/accordion/accordion';

import textData from '../../../texts';

import style from './commonQuestions.module.scss';

function CommonQuestions () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].commonQuestions

    return (
        <section className={style.commonQuestions}>
            <div className={style.titleWrap}>
                <Title isBlack={true} text={text.title}></Title>
                <div className={style.handwriteWrap}>
                    <Handwriting text={text.handwrite} color={'orange'}></Handwriting>
                </div>
            </div>
            <div className={style.accordionWrap}>
                <Accordion questions={text.quesions}></Accordion>
            </div>
        </section>
    )
}

export default CommonQuestions