import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';

import arrow from '../../../assets/interior-arrow.png';
import photo1 from '../../../assets/interior-photo1.png';
import photo2 from '../../../assets/interior-photo2.png';
import photo3 from '../../../assets/interior-photo3.png';
import photo4 from '../../../assets/interior-photo4.png';
import photo5 from '../../../assets/interior-photo5.png';
import photo6 from '../../../assets/interior-photo6.png';

import textData from '../../../texts';

import style from './wallpapersInInteriors.module.scss';


function WallpapersInInteriors () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].wallpapersInInteriors
    const btnText = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.wallpapersInInteriors}>
            <div className={style.titlesWrap}>
                <Title text={text.title} isBlack={true}></Title>
                <div className={style.handwriteWrap}>
                    <Handwriting text={text.handwrite} color={'orange'}></Handwriting>
                </div>
            </div>

            <div className={style.contentWrap}>
                <div className={style.photo1}>
                    <img className={style.img} src={photo1} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo2}>
                    <img className={style.img} src={photo2} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo3}>
                    <div className={style.arrowWrap}>
                        <img className={style.img} src={arrow} alt='' />
                    </div>
                    <img className={style.img} src={photo3} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo4}>
                    <img className={style.img} src={photo4} alt='Wallpaper in interior' />
                    <div className={style.btnWrap}>
                        <LinkButtonOrange text={btnText.viewMore} link={''}></LinkButtonOrange>
                    </div>
                </div>
                <div className={style.photo5}>
                    <img className={style.img} src={photo5} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo6}>
                    <img className={style.img} src={photo6} alt='Wallpaper in interior' />
                </div>
            </div>

        </section>
    )
}

export default WallpapersInInteriors