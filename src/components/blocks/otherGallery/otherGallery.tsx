import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';

import textData from '../../../texts';

import style from './otherGallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function OtherGallery () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].otherGallery
    const textBtn = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.otherGallery}>
            <div className={style.titleWrap}>
                <Title text={text.title} isBlack={true}></Title>
                <div className={style.handwritingWrap}>
                    <Handwriting text={text.handwriting} color={'orange'}></Handwriting>
                </div>
            </div>
            <div className={style.contentWrap}>
                <div className={style.btnWrap}>
                    <LinkButtonWhite text={textBtn.viewMore} link={'/gallery'}></LinkButtonWhite>
                </div>
                <div className={style.smallSlider}>
                    <Swiper
                        className={style.smallSlide}
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        breakpoints={{
                            720: {
                                slidesPerView: 2.5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {text.imgs.map((img: string) => (
                            <SwiperSlide>
                                <div className={style.slideContainer}>
                                    <img className={style.img} src={img} alt='' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OtherGallery