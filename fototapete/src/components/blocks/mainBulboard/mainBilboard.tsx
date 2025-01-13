import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';

import { useContext } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    const { lang } = useContext(LangContext);

    return (
        <div className={style.wrap}>
            <div className={style.textWrap}>
                <Title text={textData[lang].mainPage.title} isBlack={false}></Title>
                <div className={style.handwritingWrap}>
                    <Handwriting color={'white'} text={textData[lang].mainPage.handwriteTop}></Handwriting>
                    <Handwriting color={'white'} text={textData[lang].mainPage.handwriteBottom}></Handwriting>
                </div>
            </div>
        </div>
    )
}

export default MainBilboard