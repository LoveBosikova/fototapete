import { useContext, useEffect, useRef } from "react"
import { LangContext } from "../../../context/LangContext"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import textData from "../../../texts"

import styles from './beforeAfter.module.scss'
import Title from "../../ui/title/title"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import LazyCompareSlider from "../../ui/LazyCompareSlider/LazyCompareSlider";

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
            <p className={styles.text}>{text.text}</p>
            <div className={styles.singleSlider}>
            <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before1.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after1.png`} alt="After" />}
            />
            </div>

            <div className={styles.doubleSlider}>
                {/* <div className={styles.slider}>
                    <ReactCompareSlider className={styles.innerSlider}
                    itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before2.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after2.png`} alt="After" />}
                />
                </div> */}

        
                {/* <div className={styles.slider}>
                    <ReactCompareSlider className={styles.innerSlider}
                    itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before3.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after3.png`} alt="After" />}
                />
                </div> */}
                <div className={styles.slider}>
                    <LazyCompareSlider
                        beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before2.png`}
                        afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after2.png`}
                        alt="Image 2"
                        className={styles.innerSlider}
                    />
                    </div>
                    <div className={styles.slider}>
                    <LazyCompareSlider
                        beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before3.png`}
                        afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after3.png`}
                        alt="Image 3"
                        className={styles.innerSlider}
                    />
                    </div>
            </div>
{/* 
            <div className={styles.singleSlider}>
                <ReactCompareSlider className={styles.innerSlider}
                    itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before4.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after4.png`} alt="After" />}
                />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before5.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after5.png`} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before6.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after6.png`} alt="After" />}
                />
            </div>
            </div>

            <div className={styles.singleSlider}>
            <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before7.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after7.png`} alt="After" />}
            />
            </div>

            <div className={styles.singleSlider}>
                <ReactCompareSlider className={styles.innerSlider}
                    itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before8.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after8.png`} alt="After" />}
                />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before9.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after9.png`} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before10.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after10.png`} alt="After" />}
                />
            </div>
            </div>

            <div className={styles.singleSlider}>
            <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before11.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after11.png`} alt="After" />}
            />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before12.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after12.png`} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before13.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after13.png`} alt="After" />}
                />
            </div>
            </div>

            <div className={styles.singleSlider}>
            <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before14.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after14.png`} alt="After" />}
            />
            </div>

            <div className={styles.doubleSlider}>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before15.png`} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after15.png`} alt="After" />}
                />
            </div>
            <div className={styles.slider}>
                <ReactCompareSlider className={styles.innerSlider}
                itemOne={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/before16.png`} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={`${import.meta.env.BASE_URL}beforeAfter/after16.png`} alt="After" />}
                />
            </div>
            </div> */}
            <div className={styles.singleSlider}>
                <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before4.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after4.png`}
                    alt="Image 4"
                    className={styles.innerSlider}
                />
                </div>

                <div className={styles.doubleSlider}>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before5.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after5.png`}
                    alt="Image 5"
                    className={styles.innerSlider}
                    />
                </div>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before6.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after6.png`}
                    alt="Image 6"
                    className={styles.innerSlider}
                    />
                </div>
                </div>

                <div className={styles.singleSlider}>
                <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before7.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after7.png`}
                    alt="Image 7"
                    className={styles.innerSlider}
                />
                </div>

                <div className={styles.singleSlider}>
                <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before8.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after8.png`}
                    alt="Image 8"
                    className={styles.innerSlider}
                />
                </div>

                <div className={styles.doubleSlider}>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before9.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after9.png`}
                    alt="Image 9"
                    className={styles.innerSlider}
                    />
                </div>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before10.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after10.png`}
                    alt="Image 10"
                    className={styles.innerSlider}
                    />
                </div>
                </div>

                <div className={styles.singleSlider}>
                <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before11.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after11.png`}
                    alt="Image 11"
                    className={styles.innerSlider}
                />
                </div>

                <div className={styles.doubleSlider}>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before12.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after12.png`}
                    alt="Image 12"
                    className={styles.innerSlider}
                    />
                </div>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before13.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after13.png`}
                    alt="Image 13"
                    className={styles.innerSlider}
                    />
                </div>
                </div>

                <div className={styles.singleSlider}>
                <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before14.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after14.png`}
                    alt="Image 14"
                    className={styles.innerSlider}
                />
                </div>

                <div className={styles.doubleSlider}>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before15.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after15.png`}
                    alt="Image 15"
                    className={styles.innerSlider}
                    />
                </div>
                <div className={styles.slider}>
                    <LazyCompareSlider
                    beforeSrc={`${import.meta.env.BASE_URL}beforeAfter/before16.png`}
                    afterSrc={`${import.meta.env.BASE_URL}beforeAfter/after16.png`}
                    alt="Image 16"
                    className={styles.innerSlider}
                    />
                </div>
                </div>
        </section>
    )
} 

export default BeforeAfterPage