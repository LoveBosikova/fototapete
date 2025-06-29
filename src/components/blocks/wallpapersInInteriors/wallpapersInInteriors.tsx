import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';

import arrow from '../../../assets/interior-arrow.png';
import photo1Big from '../../../assets/interior-photo1-big.png';
import arrowMobile from '../../../assets/arrowMobile.png';

import photo2Big from '../../../assets/interior-photo2-big.png';
import photo3 from '../../../assets/interior-photo3.png';
import photo4 from '../../../assets/interior-photo4-big.png';
import photo5 from '../../../assets/interior-photo5.png';
import photo6 from '../../../assets/interior-photo6-big.png';

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
                    <div className={style.arrowMobile}>
                        <img  className={style.img} src={arrowMobile} alt='' />
                    </div>
                    <picture className={style.img} >
                        <source
                            media="(max-width: 720px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo1-small.png 720w`}
                            sizes="720px"
                        />
                        <source
                            media="(min-width: 1140px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo1-big.png 1140w`}
                            sizes="1140px"
                        />
                        <source
                            srcSet={`${import.meta.env.BASE_URL}interior-photo1-big.png 720w`}
                            sizes="720px"
                        />
                        <img  className={style.img} src={photo1Big} />
                    </picture>
                </div>
                <div className={style.photo2}>
                    <picture className={style.img} >
                        <source
                            media="(max-width: 720px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo2-small.png 720w`}
                            sizes="720px"
                        />
                        <source
                            media="(min-width: 1140px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo2-big.png 1140w`}
                            sizes="1140px"
                        />
                        <source
                            srcSet={`${import.meta.env.BASE_URL}interior-photo2-big.png 720w`}
                            sizes="720px"
                        />
                        <img  className={style.img} src={photo2Big} />
                    </picture>
                </div>
                <div className={style.photo3}>
                    <div className={style.arrowWrap}>
                        <img className={style.img} src={arrow} alt='' />
                    </div>
                    <img className={style.img} src={photo3} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo4}>
                    <picture className={style.img} >
                        <source
                            media="(max-width: 720px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo4-small.png 720w`}
                            sizes="720px"
                        />
                        <source
                            media="(min-width: 1140px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo4-big.png 1140w`}
                            sizes="1140px"
                        />
                        <source
                            srcSet={`${import.meta.env.BASE_URL}interior-photo4-big.png 720w`}
                            sizes="720px"
                        />
                        <img  className={style.img} src={photo4} />
                    </picture>
                    <div className={style.btnWrapDesctop}>
                        <LinkButtonOrange text={btnText.viewMore} link={'/gallery'}></LinkButtonOrange>
                    </div>
                </div>
                <div className={style.photo5}>
                    <img className={style.img} src={photo5} alt='Wallpaper in interior' />
                </div>
                <div className={style.photo6}>
                <picture className={style.img}>
                        <source
                            media="(max-width: 720px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo6-small.png 720w`}
                            sizes="720px"
                        />
                        <source
                            media="(min-width: 1140px)"
                            srcSet={`${import.meta.env.BASE_URL}interior-photo6-big.png 1140w`}
                            sizes="1140px"
                        />
                        <source
                            srcSet={`${import.meta.env.BASE_URL}interior-photo6-big.png 720w`}
                            sizes="720px"
                        />
                        <img  className={style.img} src={photo6} />
                    </picture>
                    <div className={style.btnWrapMedium}>
                        {/* тут */}
                        <LinkButtonOrange text={btnText.viewMore} link={'/gallery'}></LinkButtonOrange>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WallpapersInInteriors