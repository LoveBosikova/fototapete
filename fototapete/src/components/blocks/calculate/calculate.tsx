import { useContext, useState } from 'react';
import { LangContext } from '../../../context/LangContext';

import back from '../../../assets/calculateBack.png';
import selectArrow from '../../../assets/selectArrow.png';
import orangeArrow from '../../../assets/calculate-pointer.png';
import Title from '../../ui/title/title';

import textData from '../../../texts';
import style from './calculate.module.scss';
import FormResult from '../../ui/formResult/formResult';
import LinkButtonBlack from '../../ui/buttons/linkButton/linkButtonBlack';

function Calculate () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue].calculate
    const textBtn = textData[langValue].btns


    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);


    return (
        <section className={style.calculate}>
            <div className={style.backgroundWrap}><img className={style.backgroundImg} src={back} alt=''/></div>
            <div className={style.note}>
                <p className={style.noteStar}>*</p>
                <p className={style.noteText}>{text.note1}</p>
                <p className={style.noteText}>{text.note2}</p>
                <p className={style.noteText}>{text.note3}</p>
                <div className={style.noteBtnWrap}>
                    <LinkButtonBlack link={''} text={textBtn.getOffer}></LinkButtonBlack>
                </div>
            </div>
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
                    <label>
                        <div className={style.material}>
                            <p className={style.materialPlaceholder}>{text.materialsPlaceholder}</p>
                            <div className={style.arrowWrap}><img className={style.img} src={selectArrow}></img></div>
                        </div>
                        <div className={style.inputsWrap}>
                            <label className={style.widthWrap} htmlFor='width'>
                                {width === 0 ? <p className={style.widthPlaceholder}>{text.witdh}</p> : <input 
                                className={style.width} 
                                placeholder={text.witdh}
                                type='number' 
                                name='width' 
                                id='width' 
                                min={0}
                                value={width} 
                                onChange={(e)=> {setWidth(+e.target.value)}}
                                />}
                                
                            </label>
                            <label className={style.heightWrap} htmlFor='width'>
                                {height === 0 ? <p className={style.heightPlaceholder}>{text.height}</p> : <input 
                                className={style.height} 
                                placeholder={text.height}
                                type='number' 
                                name='height' 
                                id='height' 
                                min={0}
                                value={height} 
                                onChange={(e)=> {setHeight(+e.target.value)}}
                                />}
                            </label>
                        </div>

                        <select
                        className={style.selectHidden}
                        name="selectedFruit"
                        defaultValue={['orange', 'banana']}
                        multiple={false}
                        >
                    {/* TODO: OPTIONS */}
                    {/* <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option> */}
                        </select>
                    </label>
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
        </section>
    )
}

export default Calculate