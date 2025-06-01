import { LangContext } from "../../../context/LangContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButtonOrange from "../buttons/linkButton/linkButtonOrange";
import selectArrow from '../../../assets/selectArrow.png';
import FormResult from "../formResult/formResult";
import btn from '../../../assets/sliderBtn.png';

import textData from "../../../texts";

import style from './productInfo.module.scss';
import ImgLike from "../icons/imgLike/imgLike";
import SubcategoryCheckbox from "../subcategoryCheckbox/subcategoryCheckbox";
import { IMaterial } from "../../../types";
import { $cart_item_form, $cart_item_form_errors, addToCart, changeCartItemErrorsForm, changeCartItemForm } from "../../pages/cart/model";
import { useUnit } from "effector-react";
import { useParams } from "react-router-dom";
import { Modal } from "../modal/Modal";
import { closeModal } from "../modal/model";

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
    const errors = textData[langValue as keyof typeof textData].errors


    const form = useUnit($cart_item_form)
    const form_errors = useUnit($cart_item_form_errors)

    console.log(form);

    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)

    const { productId } = useParams();

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: IMaterial) {
        changeCartItemForm({
            key: "material",
            value: material
        })
        changeCartItemErrorsForm({
            key: "material",
            value: "",
            })
        setIsMaterialsOpen(false)
    }

    useEffect(() => {
        changeCartItemForm({
            key: "product",
            value: props.product
        })
    }, [productId])

    return (
        <div className={style.productInfo}>
            <div className={style.slidersWrap}>
                <div className={style.bigSlider}>
                    <div className={style.likeWrap}>
                        <ImgLike product={props.product}></ImgLike>
                    </div>
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
                    <p className={style.error}>{form_errors.material? form_errors.material : ""}</p>
                    <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{form.material?.name ? form.material?.name : textProductInfo.selectMaterial}</p></div>
                    <div className={isMaterialsOpen? style.optionsWrap : style.optionsWrapClosed}>
                        <ul className={style.scrollHiddenContainer}>
                            {textMaterials.map((material: any) => <li className={style.option} key={material.id} onClick={()=> handleOption(material)}><p className={style.materialText}>{material.name}</p></li>)}
                        </ul>
                    </div>
                    <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                </div>

                <div className={form.material?.name ? style.maesuresWrapVisible : style.maesuresWrapInvisible}>
                    <label className={style.wallWidth} htmlFor='wallWidth'>
                        <h4 className={style.measureTitle}>{textProductInfo.wallWidth}</h4>
                        <input 
                        className={style.measureInput} 
                        id='wallWidth' 
                        type='number' 
                        value={form.width}
                        onChange={(e) =>{
                            changeCartItemForm({
                                key: "width",
                                value: +e.target.value
                            })
                            changeCartItemErrorsForm({
                                key: "width",
                                value: "",
                            })
                        }
                        }
                        placeholder={textProductInfo.enterValue}/>
                        <p className={style.error}>{form_errors.width ? form_errors.width : ""}</p>
                    </label>

                    <label className={style.wallHeight} htmlFor='wallHeight'>
                        <h4 className={style.measureTitle}>{textProductInfo.wallHeight}</h4>
                        <input
                        className={style.measureInput} 
                        id='wallHeight' 
                        type='number' 
                        value={form.height}
                        onChange={(e) => {
                            changeCartItemForm({
                                key: "height",
                                value: +e.target.value
                            })
                            changeCartItemErrorsForm({
                                key: "height",
                                value: "",
                            })
                        }
                        }
                        placeholder={textProductInfo.enterValue}
                        />
                        <p className={style.error}>{form_errors.height ? form_errors.height : ""}</p>
                    </label>
                </div>

                <div className={style.calculatorWrap}>
                    <h3 className={style.calculatorTitle}>{textProductInfo.calculatorTitle}</h3>
                    <div className={style.results}>
                        <div className={style.topResultsWrap}>
                            <FormResult text={textProductInfo.priceForM} value={ form.material?.id ? String(form.material?.price) : "-"}></FormResult>
                            <FormResult text={textProductInfo.totalM} value={`${form.height && form.width ? ((+form.height/100)*(+form.width/100)).toFixed(2) : textProductInfo.totalMValue}`}></FormResult>
                        </div>
                        <div className={style.resultsWrap}>
                            <FormResult text={textProductInfo.wallpaperPrice} value={form.material && form.width && form.height ? form.material?.price!*Number(((Number(form.height)/100)*(Number(form.width)/100)).toFixed(2)) : "-"}></FormResult>
                        </div>
                        <div className={style.checkboxWrap}>
                            <div className={style.subcategoryCheckboxWrap} onClick={()=> {
                                changeCartItemForm({
                                key: "needInstallation",
                                value: !form.needInstallation
                                })
                            }}>
                                <SubcategoryCheckbox isActive={!!form.needInstallation}></SubcategoryCheckbox>
                            </div>
                            <p className={style.checkboxText}>{textProductInfo.checkbox}</p>
                        </div>
                        <p className={style.installationNote}>{textProductInfo.needInsallationNote}</p>
                    </div>
                </div>

                <div className={style.btnsWrap}>
                    <div className={style.addToCartWrap} onClick={() => {

                    }}>
                        <LinkButtonOrange 
                        text={textBtns.addToCart} 
                        link={''}  
                        onClick={() => {
                            if (!form.material) {
                                changeCartItemErrorsForm({
                                    key: "material",
                                    value: errors.selectMaterial,
                                    })
                            } else if (!form.width) {
                                changeCartItemErrorsForm({
                                    key: "width",
                                    value: errors.enterWeight,
                                    })
                            } else if (!form.height) {
                                changeCartItemErrorsForm({
                                    key: "height",
                                    value: errors.enterHeight,
                                    })
                            } else addToCart();
                        }}
                        
                        ></LinkButtonOrange>
                        <Modal modalName="cartSuccess">
                            <h2>Товар добавлен в корзину</h2>
                            <div onClick={() => closeModal()} className={style.modal_btn}>
                                <LinkButtonOrange text="Ok!" link=""/>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo