import { useContext } from 'react';
import style from './wallpapers.module.scss';
import { LangContext } from '../../../context/LangContext';
import textData from '../../../texts';
import { NavLink } from 'react-router-dom';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';

function Wallpapers () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    const textBtn = textData[langValue as keyof typeof textData].btns

    return (
        <>
        <ul className={style.wallpapers}>
            {text.categories.map((category) => {
                return (
                    <NavLink key={category.id} className={style.category} to={`/fototapete/catalog/${category.categoryName}`} end>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={category.imgSrc} alt={category.categoryName} />
                        </div>
                        <p className={style.categoryName}>{category.categoryName}</p>
                    </NavLink>
                )
            })}
        </ul>
        <div className={style.btnWrap}>
            <LinkButtonOrange text={textBtn.loadMore} link=''></LinkButtonOrange>
        </div>
        </>
    )
}

export default Wallpapers