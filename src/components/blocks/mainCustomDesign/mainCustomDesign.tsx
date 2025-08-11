import { LangContext } from '../../../context/LangContext';
import { useContext, useState } from 'react';

import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';
import selectArrow from '../../../assets/selectArrow.png';

import backLarge from '../../../assets/custom_design_big.png';
import textData from '../../../texts';

import style from './mainCustomDesign.module.scss';
import { useUnit } from 'effector-react';
import { $custom_design_errors, $form_custom_design, changeCustomDesignError, changeCustomDesignForm, resetCustomDesignErrors, resetCustomDesignForm } from '../../pages/customDesign/model';
import { IMaterial } from '../../../types';
import UploadBtn from '../../ui/buttons/uploadBtn/uploadBtn';
import LinkButtonOrange from '../../ui/buttons/linkButton/linkButtonOrange';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';
import { openModal } from '../../ui/modal/model';
import { Modal } from '../../ui/modal/Modal';
import { useNavigate } from 'react-router-dom';

function CustomDesignMain () {
    const navigate = useNavigate();

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const form = useUnit($form_custom_design)
    const errors = useUnit($custom_design_errors)
    const text = textData[langValue as keyof typeof textData].customDesignPage
    const textBtn = textData[langValue as keyof typeof textData].btns
    const textMaterials = textData[langValue as keyof typeof textData].materials
    const errorText = textData[langValue as keyof typeof textData].errors
    const modalText = textData[langValue as keyof typeof textData].modals

    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: IMaterial) {
        changeCustomDesignForm({
            key: "material",
            value: material
        })
        changeCustomDesignError({
            key: "material",
            value: "",
        })
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    return (
        <div className={style.mainCustomDesign}>
            <div className={style.backgroundWrap}>
            <picture className={style.backgroundImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet={`${import.meta.env.BASE_URL}custom_design__little.png 720w`}
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet={`${import.meta.env.BASE_URL}custom_design_big.png 1140w`}
                    sizes="1140px"
                />
                <source
                    srcSet={`${import.meta.env.BASE_URL}custom_design__medium.png 720w`}
                    sizes="720px"
                />
                <img  className={style.backgroundImg} src={backLarge} />
            </picture>
            </div>
            <div className={style.textWrap}>
                <div className={style.titleWrap}>
                    <Title text={text.main.title} isBlack={true}/>
                </div>
            </div>
                <Modal modalName="orderModal" onClose={() => {
                        navigate('/');
                    }}>
                    <p className={style.modal_text} >{modalText.order.text}</p>   
                </Modal>
            <form className={style.form}
                onSubmit={(e) => {
                    e.preventDefault()
                    if (!form.name) {
                        changeCustomDesignError({
                            key: "name",
                            value: errorText.firstName,
                            })
                        } 
                        else if (!form.surname) {
                            changeCustomDesignError({
                                key: "surname",
                                value: errorText.lastName,
                            })
                        } 
                        else if (!form.phone) {
                            changeCustomDesignError({
                                key: "phone",
                                value: errorText.phone,
                            })
                        } 
                        else if (!form.email) {
                            changeCustomDesignError({
                                key: "email",
                                value: errorText.email,
                            })
                        } 
                        else if (!form.address) {
                            changeCustomDesignError({
                                key: "address",
                                value: errorText.address,
                            })
                        } 
                        else if (!form.width) {
                            changeCustomDesignError({
                                key: "width",
                                value: errorText.enterWeight,
                            })
                        } 
                        else if (!form.height) {
                            changeCustomDesignError({
                                key: "height",
                                value: errorText.enterHeight,
                            })
                        } 
                        else if (!form.material) {
                            changeCustomDesignError({
                                key: "material",
                                value: errorText.selectMaterial,
                            })
                        } 
                        else if (!form.file) {
                            changeCustomDesignError({
                                key: "file",
                                value: errorText.file,
                            })
                        } 
                        else {
                            openModal('orderModal')
                            resetCustomDesignErrors()
                            resetCustomDesignForm()
                        } ;
                }}
            >
                <h2 className={style.form_title}>{text.main.form.title}</h2>
                    <div className={style.row}>
                        {/* <p className={style.form_label}>{text.main.form.name}</p> */}
                        <div className={style.halfrow}>
                            <input //@ts-ignore
                            value={form.first_name}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "name", 
                                    value: e.target.value })
                                changeCustomDesignError({
                                    key: "name",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.name}
                            />
                            <p className={errors.name ? style.error : style.error__hidden}>{errors.name ? errors.name : ""}</p>
                        </div>
                        <div className={style.halfrow}>
                            <input //@ts-ignore
                            value={form.last_name}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "surname", 
                                    value: e.target.value 
                                })
                                changeCustomDesignError({
                                    key: "surname",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.surname}
                            />
                            <p className={errors.surname ? style.error : style.error__hidden}>{errors.surname ? errors.surname : ""}</p>
                        </div>
                    </div>

                    <div className={style.row}>
                        <input //@ts-ignore
                            value={form.phone}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "phone", 
                                    value: e.target.value })
                                changeCustomDesignError({
                                    key: "phone",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.phone}
                            />
                            <p className={errors.phone ? style.error : style.error__hidden}>{errors.phone ? errors.phone : ""}</p>
                    </div>

                    <div className={style.row}>
                        <input //@ts-ignore
                            value={form.first_name}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "email", 
                                    value: e.target.value })
                                changeCustomDesignError({
                                    key: "email",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.email}
                            />
                            <p className={errors.email ? style.error : style.error__hidden}>{errors.email ? errors.email : ""}</p>
                    </div>
                    <div className={style.row}>
                        <input //@ts-ignore
                            value={form.address}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "address", 
                                    value: e.target.value })
                                changeCustomDesignError({
                                    key: "address",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.address}
                            />
                            <p className={errors.address ? style.error : style.error__hidden}>{errors.address ? errors.address : ""}</p>
                    </div>

                    <div className={style.row}>
                        <div className={style.halfrow}>
                            <input //@ts-ignore
                            value={form.width}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "width", 
                                    value: e.target.value })
                                changeCustomDesignError({
                                    key: "width",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.width}
                            />
                            <p className={errors.width ? style.error : style.error__hidden}>{errors.width ? errors.width : ""}</p>
                        </div>
                        <div className={style.halfrow}>
                            <input //@ts-ignore
                            value={form.height}
                            onChange={(e) => {
                                changeCustomDesignForm({ 
                                    key: "height", 
                                    value: e.target.value 
                                })
                                changeCustomDesignError({
                                    key: "height",
                                    value: "",
                                })
                            }}
                            type='text'
                            placeholder={text.main.form.height}
                            />
                            <p className={errors.height ? style.error : style.error__hidden}>{errors.height ? errors.height : ""}</p>
                        </div>
                    </div>

                    <div className={style.materialsWrap}>
                        <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{form.material ? form.material.name : text.main.form.material}</p></div>
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
                        <p className={errors.material ? style.error : style.error__hidden}>{errors.material ? errors.material : ""}</p>
                    </div>
                    <p className={errors.file ? style.error : style.text}>
                    {errors.file 
                        ? errors.file 
                        : form.file?.name
                        ? `${textBtn.uplaodDone} ${form.file?.name}`
                        : text.main.form.custom_image
                    }
                    </p>
                    <div className={style.btnsWrap}>
                        <UploadBtn 
                            onFileUpload={(file) => {
                                changeCustomDesignForm({ key: 'file', value: file })
                                changeCustomDesignError({
                                    key: "file",
                                    value: "",
                                })
                            }}
                            maxFileSize={6 * 1024 * 1024} // 6MB
                        />
                        <LinkButtonOrange text={textBtn.send}/>
                    </div>
                    <NotePrivacyPolicy color="black" text={'By clicking «Send» you agree with the'} />

            </form>
        </div>
    )
}

export default CustomDesignMain