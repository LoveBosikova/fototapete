import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import { CurCategoryContext } from '../../../context/curCategoryContext';
import { NavLink } from 'react-router-dom';

import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';

import prepareTextToLink from '../../../utils/prepareTextToLink';

import textData from '../../../texts';

import style from './wallpapers.module.scss';

function Wallpapers () {
    const { lang } = useContext(LangContext)
    const {curCategory, setCurCategory} = useContext(CurCategoryContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage
    const textBtn = textData[langValue as keyof typeof textData].btns

    console.log(curCategory);

    return (
        <>
        <ul className={style.wallpapers}>
            {text.categories.map((category) => {
                return (
                    <NavLink 
                    key={category?.id} 
                    className={style.category} 
                    onClick={()=> setCurCategory(prepareTextToLink(category?.categoryName))}
                    to={`/catalog/${prepareTextToLink(category?.categoryName)}`} 
                    end>
                        <div className={style.imgWrap}>
                            <img className={style.img} src={category?.imgSrc} alt={category?.categoryName} />
                        </div>
                        <p className={style.categoryName}>{category?.categoryName}</p>
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