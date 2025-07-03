import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../../../context/LangContext';

import backBig from '../../../assets/calculateBack-big.png';
import selectArrow from '../../../assets/selectArrow.png';
import orangeArrow from '../../../assets/calculate-pointer.png';
import Title from '../../ui/title/title';
import FormResult from '../../ui/formResult/formResult';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';

import textData from '../../../texts';

import style from './calculate.module.scss';
import { $calculate_form, $offer_form, $offer_form_errors, changeCalculateForm, changeOfferErrorsForm, changeOfferForm, resetOfferForm, resetOfferFormErrors } from './model';
import { useUnit } from 'effector-react';
import { IMaterial } from '../../../types';
import { useLocation } from 'react-router-dom';
import { Modal } from '../../ui/modal/Modal';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import { openModal } from '../../ui/modal/model';

function Calculate () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].calculate
    const textBtn = textData[langValue as keyof typeof textData].btns
    const textMaterials = textData[langValue as keyof typeof textData].materials
    const modalText = textData[langValue as keyof typeof textData].modals.offer
    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)

    const form = useUnit($calculate_form)
    const offer_form = useUnit($offer_form)
    const offer_form_errors = useUnit($offer_form_errors)

    console.log(offer_form_errors);

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: IMaterial) {
        changeCalculateForm({
            key: "material",
            value: material
        })
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#calculate') {
            const element = document.getElementById('calculate');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                
                setTimeout(() => {
                    element.scrollIntoView();
                }, 300);
            }
        }
    }, [location.hash]);

    console.log("offer_form_errors", offer_form_errors);

    return (
        <section className={style.calculate} id={`calculate`}>
            <picture className={style.backgroundImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet={`${import.meta.env.BASE_URL}calculateBack-small.png 720w`}
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet={`${import.meta.env.BASE_URL}calculateBack-big.png 1140w`}
                    sizes="1140px"
                />
                <source
                    srcSet={`${import.meta.env.BASE_URL}calculateBack-medium.png 720w`}
                    sizes="720px"
                />
                <img
                    className={style.backgroundImg}
                    src={`${import.meta.env.BASE_URL}calculateBack-big.png`}
                    alt="Background"
                />
                <img  className={style.backgroundImg} src={backBig} />
            </picture>
            <div className={style.titleWrap}>
                <Title text={text.title} isBlack={true}></Title>
            </div>
            <div className={style.calculator}>
            <div className={style.orangeArrowWrap}>
                <img className={style.img} src={orangeArrow} alt='' />
            </div>
                <h3 className={style.calculatorTitle}>{text.calculatorTitle}</h3>
                <p className={style.calculatorText}>{text.calculatorDescription}</p>
                <form className={style.form}>

                    <div className={style.materialsWrap}>
                        <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{form.material ? form.material.name : text.materialsPlaceholder}</p></div>
                        <div className={isMaterialsOpen? style.optionsWrap : style.optionsWrapClosed}>
                            <ul className={style.scrollHiddenContainer}>
                                {textMaterials.map((material) => <li 
                                className={style.option} 
                                key={material.id} 
                                onClick={() => handleOption(material)}
                                >
                                    <p className={style.materialText}>{material.name}</p>
                                </li>)}
                            </ul>
                        </div>
                        <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                    </div>
                        <div className={style.inputsWrap}>
                            <label className={style.widthWrap} htmlFor='width'>
                                <input 
                                className={style.width} 
                                type='number' 
                                name='width' 
                                id='width' 
                                placeholder={text.witdh} 
                                value={form.width} 
                                onChange={(e) => {
                                    changeCalculateForm({
                                        key: "width",
                                        value: +e.target.value
                                    })
                                }}
                                />
                            </label>
                            <label className={style.heightWrap} htmlFor='height'>
                            <input 
                            className={style.height} 
                            type='number' 
                            name='height' 
                            id='height' 
                            placeholder={text.height} 
                            value={form.height} 
                            onChange={(e) => {
                                changeCalculateForm({
                                    key: "height",
                                    value: +e.target.value
                                })
                            }}
                            />
                            </label>
                        </div>
                </form>
                <h3 className={style.calculatorTitle}>{text.priceFor}</h3>
                <div className={style.results}>
                    <div className={style.topResultsWrap}>
                        <FormResult text={text.priceForM} value={form.material? String(form.material.price) : text.priceForMValue}></FormResult>
                        <FormResult text={text.totalM} value={form.height && form.width ? ` ${(form.width * form.height)/10000} ${text.totalMValue}` : "-"}></FormResult>
                    </div>
                    <div className={style.resultsWrap}>
                        <FormResult text={text.wallpaperPrice} value={form.height && form.width &&form.material ? `${((form.width * form.height)/10000) * form.material.price!} ${text.wallpaperPriceValue}` : "-"}></FormResult>
                        <FormResult text={text.priceWithInstallation} value={text.priceWithInstallationValue}></FormResult>
                    </div>
                </div>

            </div>
                <div className={style.note}>
                    <p className={style.noteStar}>*</p>
                    <p className={style.noteText}>{text.note1}</p>
                    <p className={style.noteText}>{text.note2}</p>
                    <p className={style.noteText}>{text.note3}</p>
                    <div className={style.noteBtnWrap} onClick={() => openModal('offer')}>
                        <LinkButtonBlack link={''} text={textBtn.getOffer} ></LinkButtonBlack>
                    </div>
                </div>
                <Modal 
                modalName="offer" 
                className={style.noteBtnWrap} 
                modalClassName={style.modal__offer}>
                    <p className={style.modal_text}>{modalText.text}</p>
                    <form 
                    className={style.modal__offer__form} 
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (!offer_form.name) {
                            changeOfferErrorsForm({
                                    key: "name",
                                    value: modalText.error_no_name,
                                    })
                            } else if (!offer_form.phone) {
                                changeOfferErrorsForm({
                                    key: "phone",
                                    value: modalText.error_no_phone,
                                    })
                            } else {
                                openModal('offes_success')
                                resetOfferFormErrors()
                                resetOfferForm()
                            } ;
                    }}
                    >
                        <label htmlFor='width'>
                            <input 
                            className={style.modal__offer__input}
                            name='name' 
                            id='name' 
                            placeholder={modalText.name} 
                            value={offer_form.name} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "name",
                                    value: e.target.value
                                })
                                changeOfferErrorsForm({
                                    key: "name",
                                    value: "",
                                })
                            }}
                            />
                            <p className={offer_form_errors.name ? style.error : style.error__hidden}>{offer_form_errors.name ? offer_form_errors.name : ""}</p>
                        </label>
                        <label htmlFor='phone'>
                            <input 
                            className={style.modal__offer__input}
                            name='phone' 
                            id='phone' 
                            placeholder={modalText.phone} 
                            value={offer_form.phone} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "phone",
                                    value: e.target.value
                                })
                                changeOfferErrorsForm({
                                    key: "phone",
                                    value: "",
                                })
                            }}
                            />
                            <p className={offer_form_errors.phone ? style.error : style.error__hidden}>{offer_form_errors.phone ? offer_form_errors.phone : ""}</p>
                        </label>
                        <label htmlFor='mail'>
                            <input 
                            className={style.modal__offer__input}
                            name='mail' 
                            id='mail' 
                            placeholder={modalText.email} 
                            value={offer_form.mail} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "mail",
                                    value: e.target.value
                                })
                            }}
                            />
                        </label>
                        <label htmlFor='request'>
                            <textarea 
                            className={style.modal__offer__input}
                            name='request' 
                            id='request' 
                            placeholder={modalText.request} 
                            value={offer_form.request} 
                            onChange={(e) => {
                                changeOfferForm({
                                    key: "request",
                                    value: e.target.value
                                })
                            }}
                            />
                        </label>
                        <LinkButtonOrange type='submit' text={modalText.send}/>
                    </form>
                </Modal>
                <Modal modalName="offes_success">
                    <h2>{modalText.offer_success}</h2>
                </Modal>
        </section>
    )
}

export default Calculate