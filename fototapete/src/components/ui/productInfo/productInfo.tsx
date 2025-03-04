import { LangContext } from "../../../context/LangContext";
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButtonOrange from "../buttons/linkButton/linkButtonOrange";
import selectArrow from '../../../assets/selectArrow.png';
import FormResult from "../formResult/formResult";
import btn from '../../../assets/sliderBtn.png';

import textData from "../../../texts";

import style from './productInfo.module.scss';

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
    const textProductInfo = textData[langValue as keyof typeof textData].productPage
    const textBtns = textData[langValue as keyof typeof textData].btns

    // Material values
    const [selectedMaterial, setSelectedMaterial] = useState<string>('')
    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: string) {
        setSelectedMaterial(material)
        setIsMaterialsOpen(false)
    }

    // Calculator values
    const [ wallWidth, setWallWidth ] = useState<number | undefined>(undefined)

    function handleWidth (width: number) {
        setWallWidth(width)
    }


    console.log(selectedMaterial);

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
                <p className={style.metrics}>{`${metrics} ${textProductInfo.dependOn}`}</p>
                <p className={style.note}>{note}</p>
                <p className={style.materialTitle}>{material}</p>

                <div className={style.materialsWrap}>
                    <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{selectedMaterial? selectedMaterial : textProductInfo.selectMaterial}</p></div>
                    <div className={isMaterialsOpen? style.optionsWrap : style.optionsWrapClosed}>
                        <ul className={style.scrollHiddenContainer}>
                            {textMaterials.map((material) => <li className={style.option} key={material} onClick={()=> handleOption(material)}><p className={style.materialText}>{material}</p></li>)}
                        </ul>
                    </div>
                    <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                </div>

                <div className={selectedMaterial? style.maesuresWrapVisible : style.maesuresWrapInvisible}>
                    <label className={style.wallWidth} htmlFor='wallWidth'>
                        <h4 className={style.measureTitle}>{textProductInfo.wallWidth}</h4>
                        <input 
                        className={style.measureInput} 
                        id='wallWidth' 
                        type='number' 
                        value={wallWidth}
                        onChange={(e) => handleWidth(+e.target.value)}
                        placeholder={textProductInfo.enterValue}/>
                    </label>

                    <label className={style.wallHeight} htmlFor='wallHeight'>
                        <h4 className={style.measureTitle}>{textProductInfo.wallHeight}</h4>
                        <input
                        className={style.measureInput} 
                        id='wallHeight' 
                        type='number' 
                        placeholder={textProductInfo.enterValue}
                        />
                    </label>

                </div>

                <div className={style.calculatorWrap}>
                    <h3 className={style.calculatorTitle}>{textProductInfo.calculatorTitle}</h3>
                    <div className={style.results}>
                        <div className={style.topResultsWrap}>
                            <FormResult text={textProductInfo.priceForM} value={textProductInfo.priceForMValue}></FormResult>
                            <FormResult text={textProductInfo.totalM} value={textProductInfo.totalMValue}></FormResult>
                        </div>
                        <div className={style.resultsWrap}>
                            <FormResult text={textProductInfo.wallpaperPrice} value={textProductInfo.wallpaperPriceValue}></FormResult>
                        </div>
                    </div>
                </div>

                <div className={style.btnsWrap}>
                    <div className={style.addToCartWrap}>
                        <LinkButtonOrange text={textBtns.addToCart} link={''}></LinkButtonOrange>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo