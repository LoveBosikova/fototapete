import { useContext, useState } from 'react';

import { LangContext } from '../../../context/LangContext';

import { LANGS, ILang } from '../../../variables';

import selectArrow from '../../../assets/selectArrow.png'

import style from './selector.module.scss';

function Selector () {

    // Берём данные о языке из контекста
    const { lang, toggleLang } = useContext(LangContext)

    // Состояние нужно, чтобы элемент обновлялся сам после выбора новой опции, а не только менял значение контекста
    const [ curLang, setCurLang ] = useState<ILang>(lang)

    // const [ isOpen, setIsOpen ] = useState(false);

    console.log(toggleLang);

    return (
        <div className={style.selectorWrap}>
            <div className={style.langWrap}>
                <p>{curLang.value}</p>
                <div className={style.arrowWrap}>
                    <img src={selectArrow} alt='' />
                </div>
            </div>
            <select
            className={style.selector}
            value={curLang.value}
            onChange={e =>{
                // toggleLang(e.target.value) // Меняем контекст
                const newLang = LANGS.filter((lang)=> lang.value === e.target.value)[0];
                console.log(newLang);
                setCurLang(newLang) // Меняем состояние селекта
            }}
        >
            {LANGS.map((lang) => <option key={lang.value} value={lang.value}>{lang.name}</option> )}
        </select>

        </div>
    )
}

export default Selector;