import { LangContext } from "../../../context/LangContext";
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButtonOrange from "../buttons/linkButton/linkButtonOrange";
import LinkButtonWhite from "../buttons/linkButton/linkBurronWhite";

import btn from '../../../assets/sliderBtn.png';
import selectArrow from '../../../assets/selectArrow.png';
import textData from "../../../texts";

import style from './productInfo.module.scss';
import ImgLike from "../icons/imgLike/imgLike";

type IProductInfoProps = {
    product: any ;
    note: string;
    material: string;
    instructions: string;
}

function ProductInfo (props: IProductInfoProps) {

    const swiperRef = useRef<any>(null);

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const { name, metrics, imgs } = props.product
    const { note, material, } = props

    const textMaterials = textData[langValue as keyof typeof textData].materials
    const textBtns = textData[langValue as keyof typeof textData].btns


    const [selectedMaterial, setSelectedMaterial] = useState<string>(textMaterials[0])
    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: string) {
        setSelectedMaterial(material)
        setIsMaterialsOpen(false)
    }

    return (
        <div className={style.productInfo}>
            <div className={style.slidersWrap}>
                <div className={style.bigSlider}>
                    <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    >
                        {imgs.map((img: string) => <SwiperSlide><img className={style.img} src={img} alt={name} /></SwiperSlide>)}
                    </Swiper>
                    <div className={style.sliderBtns}>
                        <button className={style.btnPrev} onClick={() => swiperRef.current?.slidePrev()}>
                            <img className={style.img} src={btn} alt="" />
                        </button>
                        <button className={style.btnNext} onClick={() => swiperRef.current?.slideNext()}>
                                <img className={style.img} src={btn} alt='Следующий слайд' />
                        </button>
                    </div>
                </div>
                <div className={style.smallSlider}>
                    <Swiper
                    className={style.smallSlide}
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {imgs.map((img: string) => <SwiperSlide><img className={style.img} src={img} alt={name} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
            <div className={style.textWrap}>
                <h1 className={style.titleWrap}>{name}</h1>
                <p className={style.metrics}>{metrics}</p>
                <p className={style.note}>{note}</p>
                <p className={style.materialTitle}>{material}</p>

                <div className={style.materialsWrap}>
                    <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{selectedMaterial}</p></div>
                    <div className={isMaterialsOpen? style.optionsWrap : style.optionsWrapClosed}>
                        <ul className={style.scrollHiddenContainer}>
                            {textMaterials.map((material) => <li className={style.option} key={material} onClick={()=> handleOption(material)}><p className={style.materialText}>{material}</p></li>)}
                        </ul>
                    </div>
                    <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                </div>

                <div className={style.btnsWrap}>
                    <div className={style.addToCartWrap}>
                        <LinkButtonOrange text={textBtns.addToCart} link={''}></LinkButtonOrange>
                    </div>
                    <div className={style.calculateBtnWrap}>
                        <LinkButtonWhite text={textBtns.calculateThePrice} link={''}></LinkButtonWhite>
                    </div>
                    <div className={style.likeWrap}>
                        <ImgLike isActive={true}></ImgLike>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo