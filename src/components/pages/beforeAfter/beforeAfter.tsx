import { useContext, useEffect, useRef } from "react"
import { LangContext } from "../../../context/LangContext"
import textData from "../../../texts"

import styles from './beforeAfter.module.scss'
import Title from "../../ui/title/title"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

function BeforeAfterPage () {


    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].beforeAfterPage

    const containerRef = useRef<HTMLDivElement>(null);

    console.log(text.photos[0][0]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <section className={styles.beforeAfterPage} ref={containerRef}>
            <Title isBlack={true} text={text.title} />
            <p>{text.text}</p>
            {/* <div className={styles.singleSlider}>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[0][0]} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[0][1]} alt="Image two" />}
                />
            </div>
            <div className={styles.doubleSlider}>
                <div className={styles.slider}>
                    <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="..." srcSet="..." alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="..." srcSet="..." alt="Image two" />}
                    />
                </div>
                <div className={styles.slider}>
                    <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="..." srcSet="..." alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="..." srcSet="..." alt="Image two" />}
                    />
                </div>
            </div> */}
            <div className={styles.singleSlider}>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}before1`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}after1`} alt="After" />}
            />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[1][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[1][1]} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[2][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[2][1]} alt="After" />}
                />
            </div>
            </div>

            <div className={styles.singleSlider}>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[3][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[3][1]} alt="After" />}
            />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[4][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[4][1]} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[5][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[5][1]} alt="After" />}
                />
            </div>
            </div>

            <div className={styles.singleSlider}>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={text.photos[6][0]} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={text.photos[6][1]} alt="After" />}
            />
            </div>
        </section>
    )
} 

export default BeforeAfterPage