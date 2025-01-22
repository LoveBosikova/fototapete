import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';

import textData from '../../../texts';
import wallpapersPhoto from '../../../assets/categories-photo1.png';
import filmsPhoto from '../../../assets/categories-photo2.png';

import style from './categories.module.scss';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';

function Categories () {

    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();

    const text = textData[langValue as keyof typeof textData].categoriesBlock
    const btnText = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.categories}>
            <Title text={text.title} isBlack={true}></Title>
            <div className={style.contentWrap}>
                <div className={style.categoryWrap}>
                    <div className={style.wallpapersWrap}>
                        <img className={style.img} src={wallpapersPhoto} alt='Go to wallpapers category' />
                    </div>
                    <div className={style.walpapersDescriptionWrap}>
                            <p className={style.categoryText}>{text.wallpapers}</p>
                            <div className={style.blackBtnWrap}>
                                <LinkButtonBlack text={btnText.goToCategory} link={''}></LinkButtonBlack>
                            </div>
                    </div>
                </div>
                <div className={style.categoryWrap}>
                    <div className={style.filmsWrap}>
                        <img className={style.img} src={filmsPhoto} alt='Go to films category' />
                    </div>
                    <div className={style.filmsDescriptionWrap}>
                        <div className={style.description}>
                            <p className={style.categoryText}>{text.films}</p>
                            <div className={style.blackBtnWrap}>
                                <LinkButtonBlack text={btnText.goToCategory} link={''}></LinkButtonBlack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Categories