import { useContext } from 'react';
import style from './wallpapers.module.scss';
import { LangContext } from '../../../context/LangContext';
import textData from '../../../texts';

function Wallpapers () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage

    return (
        <ul className={style.wallpapers}>
            {text.categories.map((category) => {
                return (
                    <li key={category.id} className={style.category}>
                        <div className={style.imgWrap}>
                            <img src={category.imgSrc} alt={category.categoryName} />
                        </div>
                        <p className={style.categoryName}>{category.categoryName}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Wallpapers