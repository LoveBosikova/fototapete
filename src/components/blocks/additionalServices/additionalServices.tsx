import { useContext } from 'react'
import { LangContext } from '../../../context/LangContext'
import Title from '../../ui/title/title'
import textData from '../../../texts'
import LinkButtonOrangeWhite from '../../ui/buttons/linkButton/linkBurronOrangeWhite'
import Handwriting from '../../ui/handwriting/handwriting'
import style from './additionalServices.module.scss'
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack'
import { openModal } from '../../ui/modal/model'
import { Modal } from '../../ui/modal/Modal'

function AdditionalServices () {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].infoPage
    const btnText = textData[langValue as keyof typeof textData].btns

    const modalText = textData[langValue as keyof typeof textData].modals

    return (
        <section className={style.additionalServices}>
            <div className={style.titlewrap}>
                <Title text={text.process_title} isBlack={true}></Title>
                <div className={style.handwrite}>
                    <Handwriting text={text.process_handwriting} color={"orange"}/>
                </div>
            </div>
            <ul className={style.content}>
                <li className={style.card_beuge}>
                    <p className={style.pointText}>{text.process_measurement_service}</p>
                    <div className={style.btnWrap} onClick={() => openModal('point1')}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                    <Modal modalName="point1">
                        <h2>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_design_creation}</p>
                    <div className={style.btnWrap} onClick={() => openModal('point2')}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                    <Modal modalName="point2">
                        <h2>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
                <li className={style.card_beuge}>
                    <p className={style.pointText}>{text.process_sample_printing}</p>
                    <div className={style.btnWrap} onClick={() => openModal('point3')}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                    <Modal modalName="point3">
                        <h2>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_design_visualization}</p>
                    <div className={style.btnWrap} onClick={() => openModal('point4')}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                    <Modal modalName="point4">
                        <h2>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
                <li className={style.card_beuge} onClick={() => openModal('point5')}>
                    <p className={style.pointText}>{text.process_installation}</p>
                    <div className={style.btnWrap}>
                        <LinkButtonBlack text={btnText.learnMore} link={''}></LinkButtonBlack>
                    </div>
                    <Modal modalName="point5">
                        <h2>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
                <li className={style.card}>
                    <p className={style.pointText}>{text.process_gift_certificates}</p>
                    <div className={style.btnWrap} onClick={() => openModal('point6')}>
                        <LinkButtonOrangeWhite text={btnText.learnMore} link={''}></LinkButtonOrangeWhite>
                    </div>
                    <Modal modalName="point6">
                        <h2 className={style.modal_title}>{modalText.modal.title}</h2>
                        <p className={style.modal_text}>{modalText.modal.text}</p>   
                    </Modal>
                </li>
            </ul>
        </section>
    )
}

export default AdditionalServices