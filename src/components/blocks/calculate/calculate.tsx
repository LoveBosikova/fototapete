import { useContext, useState } from 'react';
import { LangContext } from '../../../context/LangContext';

import backBig from '../../../assets/calculateBack-big.png';
import selectArrow from '../../../assets/selectArrow.png';
import orangeArrow from '../../../assets/calculate-pointer.png';
import Title from '../../ui/title/title';
import FormResult from '../../ui/formResult/formResult';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';

import textData from '../../../texts';

import style from './calculate.module.scss';

function Calculate () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].calculate
    const textBtn = textData[langValue as keyof typeof textData].btns
    const textMaterials = textData[langValue as keyof typeof textData].materials

    const [selectedMaterial, setSelectedMaterial] = useState<string>(text.materialsPlaceholder)
    const [isMaterialsOpen, setIsMaterialsOpen] = useState<boolean>(false)
    const [width, setWidth] = useState<number | string>(text.witdh);
    const [height, setHeight] = useState<number | string>(text.height);

    function handleMaterials () {
        setIsMaterialsOpen(!isMaterialsOpen)
    }

    function handleOption (material: string) {
        setSelectedMaterial(material)
        setIsMaterialsOpen(false)
    }

    function handleWidth (e: React.ChangeEvent<HTMLInputElement> ) {
        setWidth(e.target.value)
    }

    function handleHeight (e: React.ChangeEvent<HTMLInputElement> ) {
        setHeight(e.target.value)
    }

    return (
        <section className={style.calculate}>
            <picture className={style.backgroundImg} >
                <source
                    media="(max-width: 720px)"
                    srcSet="/calculateBack-small.png 720w"
                    sizes="720px"
                />
                <source
                    media="(min-width: 1140px)"
                    srcSet="/calculateBack-big.png 1140w"
                    sizes="1140px"
                />
                <source
                    srcSet="/calculateBack-medium.png 720w"
                    sizes="720px"
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
                        <div className={style.material} onClick={handleMaterials}><p className={style.selectedMaterial}>{selectedMaterial}</p></div>
                        <div className={isMaterialsOpen? style.optionsWrap : style.optionsWrapClosed}>
                            <ul className={style.scrollHiddenContainer}>
                                {textMaterials.map((material) => <li className={style.option} key={material.id} onClick={()=> handleOption(material.name)}><p className={style.materialText}>{material.name}</p></li>)}
                            </ul>
                        </div>
                        <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                    </div>

                        <div className={style.inputsWrap}>
                            <label className={style.widthWrap} htmlFor='width'>
                                {<input className={style.width} type='number' name='width' id='width' placeholder={text.witdh} value={width} onChange={handleWidth} />}
                            </label>
                            <label className={style.heightWrap} htmlFor='height'>
                            {<input className={style.height} type='number' name='height' id='height' placeholder={text.height} value={height} onChange={handleHeight} />}
                            </label>
                        </div>
                </form>
                <h3 className={style.calculatorTitle}>{text.priceFor}</h3>
                <div className={style.results}>
                    <div className={style.topResultsWrap}>
                        <FormResult text={text.priceForM} value={text.priceForMValue}></FormResult>
                        <FormResult text={text.totalM} value={text.totalMValue}></FormResult>
                    </div>
                    <div className={style.resultsWrap}>
                        <FormResult text={text.wallpaperPrice} value={text.wallpaperPriceValue}></FormResult>
                        <FormResult text={text.priceWithInstallation} value={text.priceWithInstallationValue}></FormResult>
                    </div>
                </div>

            </div>
                <div className={style.note}>
                    <p className={style.noteStar}>*</p>
                    <p className={style.noteText}>{text.note1}</p>
                    <p className={style.noteText}>{text.note2}</p>
                    <p className={style.noteText}>{text.note3}</p>
                    <div className={style.noteBtnWrap}>
                        <LinkButtonBlack link={''} text={textBtn.getOffer}></LinkButtonBlack>
                    </div>
                </div>
        </section>
    )
}

export default Calculate