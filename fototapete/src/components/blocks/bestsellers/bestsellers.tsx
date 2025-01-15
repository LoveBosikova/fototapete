import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';
import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';

import pointer from '../../../assets/bestsellers-pointer.png'
import childrewallspapers from '../../../assets/childrensWallpaper.webp';
import mural from '../../../assets/Mural.webp';
import marble from '../../../assets/Marble.webp';
import icon1 from '../../../assets/bestsellers-icon-1.webp';
import icon2 from '../../../assets/bestsellers-icon-2.webp';
import icon3 from '../../../assets/bestsellers-icon-3.webp';

import textData from '../../../texts';

import style from './bestsellers.module.scss';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

function Bestsellers (){

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();

    const text = textData[langValue].bestsellers
    const btnText = textData[langValue].btns
    const categoryText = textData[langValue].categories
    
    return (
        <section className={style.bestsellers}>
            <Title text={text.title} isBlack={true}></Title>
            <div className={style.handwriteWrap}>
                <Handwriting text={text.handwriteTop} color={'orange'}></Handwriting>
            </div>
            <div className={style.btnWrap}>
                <LinkButtonWhite text={btnText.categories} link={''}></LinkButtonWhite>
            </div>
            <ul className={style.contentWrap}>
                <li className={style.bigbestseller}>
                    <div className={style.category}>
                        <p className={style.categoryName}>{categoryText.childrensWallpapers}</p>
                    </div>
                    <img className={style.img} src={childrewallspapers} alt='Children`s wallpapers' />
                </li>
                <li className={style.bigbestseller}>
                    <div className={style.category}>
                        <p className={style.categoryName}>{categoryText.mural}</p>
                    </div>
                    <img className={style.img} src={mural} alt='Mural'></img>
                </li>
                <li className={style.bigbestseller}>
                    <div className={style.category}>
                        <p className={style.categoryName}>{categoryText.marble}</p>
                    </div>
                    <img className={style.img} src={marble} alt='Marble'></img>
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
                    <div className={style.bottomHandwriteWrap}>
                        <Handwriting text={text.handwriteBottom} color={'orange'}></Handwriting>
                    </div>
                    <div className={style.pointerWrap}>
                        <img className={style.img} src={pointer} alt='' />
                    </div>
                    <div className={style.orangeBtnWrap}>
                        <LinkButtonOrange text={btnText.loadMore} link={''}></LinkButtonOrange>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Bestsellers