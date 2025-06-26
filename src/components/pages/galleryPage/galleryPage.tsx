import { useContext, useEffect, useRef } from "react";
import styles from "./galleryPage.module.scss";
import Title from "../../ui/title/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar} from 'swiper/modules';
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";

// Import Swiper styles


const GalleryPage = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].galleryPage
    

    useEffect(() => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }, 0);
        }, []);

    return (
        <section 
        className={styles.galleryPage} 
        ref={containerRef}>
            <Title isBlack={true} text={text.title}/>
            <div className={styles.swipers}>

                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        mousewheel={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        className={styles.verticalSwiper}
                    >
                        {[...Array(Math.ceil(text.imgs.length / 2))].map((_, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.gridContainer}>
                            {text.imgs.slice(index * 2, (index + 1) * 2).map((img, imgIndex) => (
                                <div key={imgIndex} className={styles.gridItem}>
                                <img src={img} alt='' className={styles.img} />
                                </div>
                            ))}
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.mobile}>
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={1}
                            mousewheel={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                            className={styles.verticalSwiper}
                        >
                            {[...Array(Math.ceil(text.imgs.length / 2))].map((_, index) => (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <div className={styles.gridContainer}>
                                {text.imgs.slice(index * 2, (index + 1) * 2).map((img, imgIndex) => (
                                    <div key={imgIndex} className={styles.gridItem}>
                                    <img src={img} alt='' className={styles.img} />
                                    </div>
                                ))}
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>                

                    </div>
                    <div className={styles.superMobile}>
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={1}
                            mousewheel={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                            className={styles.verticalSwiper}
                        >
                            {[...Array(Math.ceil(text.imgs.length / 2))].map((_, index) => (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <div className={styles.gridContainer}>
                                {text.imgs.slice(index * 2, (index + 1) * 2).map((img, imgIndex) => (
                                    <div key={imgIndex} className={styles.gridItem}>
                                        <img src={img} alt='' className={styles.img} />
                                    </div>
                                ))}
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>              
                    </div>
            </div>
        </section>
    )
}

export default GalleryPage