import { useContext, useState } from 'react';

import { LangContext } from '../../../context/LangContext';

import { LANGS, ILang } from '../../../variables';

import selectArrow from '../../../assets/selectArrow.png'

import style from './selector.module.scss';

type ISelectorProps = {
    isWhite: boolean
}

function Selector (props: ISelectorProps) {

    const { isWhite } = props

    // Берём данные о языке из контекста
    const { lang, toggleLang } = useContext(LangContext)

    // Состояние нужно, чтобы элемент обновлялся сам после выбора новой опции, а не только менял значение контекста
    const [ curLang, setCurLang ] = useState<ILang>(lang)

    // Открыт - закрыт селект 
    const [ isOpen, setIsOpen ] = useState(false);

    function handleIsOpen () {
        setIsOpen(!isOpen)
    }

    return (
        <div className={isWhite ? style.selectorWrap : style.selectorWrapColorful}>
            <div className={style.langWrap} onClick={handleIsOpen}>
                <p>{curLang.value}</p>
                <div className={style.arrowWrap}>
                    <img src={selectArrow} alt='' />
                </div>
            </div>
            <ul className={isOpen? style.options : style.closedOptions}>
                {LANGS.map((langOption) => <li className={langOption.name !== lang.name ? style.option : style.currentOption} key={langOption.value} onClick={()=>{
                    toggleLang(langOption)
                    setCurLang(langOption)
                    setIsOpen(false)
                }}>{langOption.name}</li>)}
            </ul>
        </div>
    )
}

export default Selector;