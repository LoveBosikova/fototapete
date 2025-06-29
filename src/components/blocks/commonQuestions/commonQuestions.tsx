import { useContext, useEffect } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import Accordion from '../../ui/accordion/accordion';

import textData from '../../../texts';

import style from './commonQuestions.module.scss';
import { useLocation } from 'react-router-dom';

function CommonQuestions () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].commonQuestions

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#questions') {
            const element = document.getElementById('questions');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                
                setTimeout(() => {
                    element.scrollIntoView();
                }, 300);
            }
        }
    }, [location.hash]);

    return (
        <section className={style.commonQuestions} id='questions'>
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