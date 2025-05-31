import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import interior1Big from '../../../assets/orderingProcess-interior1-big.png';
import interior2Big from '../../../assets/orderingProcess-interior2-big.png';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';
import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';
import LinkButtonOrangeWhite from '../../ui/buttons/linkButton/linkBurronOrangeWhite';

import textData from '../../../texts';

import style from './orderingProcess.module.scss';
import { Modal } from '../../ui/modal/Modal';
import { openModal } from '../../ui/modal/model';

function OrderingProcess () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].orderingProcess
    const btnText = textData[langValue as keyof typeof textData].btns
    const modalText = textData[langValue as keyof typeof textData].modals

    return (
        <section className={style.orderingProcess}>
            <div className={style.titlesWrap}>
                <Title text={text.title} isBlack={true}></Title>
                <div className={style.handwriteWrap}>
                    <Handwriting text={text.handwrite} color={'orange'}></Handwriting>
                </div>
            </div>
                <div className={style.contentWrap}>
                    <div className={style.point1}>
                            <picture className={style.img} >
                                <source
                                    media="(max-width: 720px)"
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior1-small.png 720w`}
                                    sizes="720px"
                                />
                                <source
                                    media="(min-width: 1140px)"
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior1-big.png 1140w`}
                                    sizes="1140px"
                                />
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior1-medium.png 720w`}
                                    sizes="720px"
                                />
                                <img  className={style.img} src={interior1Big} alt='Wallpaper interior'/>
                            </picture>
                    </div>
                    <div className={style.point2}>
                        <p className={style.pointText}>{text.point1}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point1')}>
                            <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                            <Modal modalName="point1">
                                <h2>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point3}>
                        <p className={style.pointText}>{text.point2}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point2')}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                            <Modal modalName="point2">
                                <h2>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point4}>
                        <p className={style.pointText}>{text.point3}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point3')}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                            <Modal modalName="point3">
                                <h2>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point5}>
                        <p className={style.pointText}>{text.point4}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point4')}>
                            <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                            <Modal modalName="point4">
                                <h2>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point6}>
                        <p className={style.pointText}>{text.point5}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point5')}>
                            <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                            <Modal modalName="point5">
                                <h2>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point7}>
                        <p className={style.pointText}>{text.point6}</p>
                        <div className={style.btnWrap} onClick={() => openModal('point6')}>
                            <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                            <Modal modalName="point6">
                                <h2 className={style.modal_title}>{modalText.modal.title}</h2>
                                <p className={style.modal_text}>{modalText.modal.text}</p>   
                            </Modal>
                        </div>
                    </div>
                    <div className={style.point8}>
                    <picture className={style.img} >
                                <source
                                    media="(max-width: 720px)"
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior2-small.png 720w`}
                                    sizes="720px"
                                />
                                <source
                                    media="(min-width: 1140px)"
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior2-big.png 1140w`}
                                    sizes="1140px"
                                />
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}orderingProcess-interior2-medium.png 720w`}
                                    sizes="720px"
                                />
                                <img  className={style.img} src={interior2Big} alt='Wallpaper interior'/>
                            </picture>
                        {/* <img className={style.img} src={interior2} alt='Wallpaper interior'></img> */}
                    </div>
                </div>
        </section>
    )
}

export default OrderingProcess