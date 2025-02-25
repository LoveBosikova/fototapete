import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';

import pointer from '../../../assets/bestsellers-pointer.png'
import childrewallspapers from '../../../assets/childrensWallpaper.webp';
import mural from '../../../assets/Mural.webp';
import marble from '../../../assets/Marble.webp';
import icon1 from '../../../assets/bestsellers-icon-1.webp';
import icon2 from '../../../assets/bestsellers-icon-2.webp';
import icon3 from '../../../assets/bestsellers-icon-3.webp';

import textData from '../../../texts';

import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import { CurCategoryContext } from '../../../context/curCategoryContext';

import { NavLink } from 'react-router-dom';

import prepareTextToLink from '../../../utils/prepareTextToLink';

import style from './bestsellers.module.scss';

function Bestsellers (){

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const {setCurCategory} = useContext(CurCategoryContext)

    const text = textData[langValue as keyof typeof textData].bestsellers
    const btnText = textData[langValue as keyof typeof textData].btns
    const categoryText = textData[langValue as keyof typeof textData].categories
    
    return (
        <section className={style.bestsellers}>
            <Title text={text.title} isBlack={true}></Title>
            <div className={style.handwriteWrap}>
                <Handwriting text={text.handwriteTop} color={'orange'}></Handwriting>
            </div>
            <div className={style.btnWrap}>
                <LinkButtonWhite text={btnText.categories} link={'/fototapete/catalog'}></LinkButtonWhite>
            </div>
            <ul className={style.contentWrap}>
                <li className={style.bigbestseller}>
                    <NavLink 
                    className={style.link} 
                    to={`/fototapete/catalog/${prepareTextToLink(categoryText.childrensWallpapers)}`} 
                    onClick={() => setCurCategory(prepareTextToLink(categoryText.childrensWallpapers)) }
                    end>
                        <div className={style.category}>
                            <p className={style.categoryName}>{categoryText.childrensWallpapers}</p>
                        </div>
                        <img className={style.img} src={childrewallspapers} alt='Children`s wallpapers' />
                    </NavLink>
                </li>
                <li className={style.bigbestseller}>
                    <NavLink 
                    className={style.link} 
                    to={`/fototapete/catalog/${prepareTextToLink(categoryText.mural)}`} 
                    onClick={() => setCurCategory(prepareTextToLink(categoryText.mural)) }
                    end>
                        <div className={style.category}>
                            <p className={style.categoryName}>{categoryText.mural}</p>
                        </div>
                        <img className={style.img} src={mural} alt='Mural'></img>
                    </NavLink>
                </li>
                <li className={style.bigbestseller}>
                    <NavLink 
                    className={style.link} 
                    to={`/fototapete/catalog/${prepareTextToLink(categoryText.marble)}`} 
                    onClick={() => setCurCategory(prepareTextToLink(categoryText.marble)) }
                    end>
                        <div className={style.category}>
                            <p className={style.categoryName}>{categoryText.marble}</p>
                        </div>
                        <img className={style.img} src={marble} alt='Marble'></img>
                    </NavLink>
                </li>
                <li className={style.smallbestsellers}>
                    <div className={style.smallBestsellersWrap}>
                        <div className={style.smallBestseller}>
                            <img className={style.img} src={icon1} alt='Other bestseller'></img>
                        </div>
                        <div className={style.smallBestseller}>
                            <img className={style.img} src={icon2} alt='Other bestseller'></img>
                        </div>
                        <div className={style.smallBestseller}>
                            <img className={style.img} src={icon3} alt='Other bestseller'></img>
                        </div>
                    </div>
                    <div className={style.btnSection}>
                        <div className={style.bottomHandwriteWrap}>
                            <Handwriting text={text.handwriteBottom} color={'orange'}></Handwriting>
                        </div>
                        <div className={style.pointerWrap}>
                            <img className={style.img} src={pointer} alt='' />
                        </div>
                        <div className={style.orangeBtnWrap}>
                            <LinkButtonOrange text={btnText.loadMore} link={''}></LinkButtonOrange>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Bestsellers