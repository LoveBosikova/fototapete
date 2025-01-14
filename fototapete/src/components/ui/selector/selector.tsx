import { useContext, useState } from 'react';
import style from './selector.module.scss';
import { LangContext } from '../../../context/LangContext';

function Selector () {

    // Берём данные о языке из контекста
    const { lang, toggleLang } = useContext(LangContext);

    // Состояние нужно, чтобы элемент обновлялся сам после выбора новой опции, а не только менял значение контекста
    const [curLang, setCurLang] = useState(lang)

    return (
        <select
            value={curLang}
            onChange={e =>{
                // toggleLang(e.target.value) // Меняем контекст
                setCurLang(e.target.value) // Меняем состояние селекта
            }}
        >
            <option value='en'>English</option>
            <option value='hrv'>Hrvatski</option>
    </select>
    )
}

export default Selector;