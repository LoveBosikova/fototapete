import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import backImg from '../../../assets/footer-back.png';
import insta from '../../../assets/icon-instagram.png';
import fb from '../../../assets/icon-fb.png';
import pinterest from '../../../assets/icon-pinterest.png';
import mockup1 from '../../../assets/footer-1.png';
import mockup2 from '../../../assets/footer-2.png';
import mockup3 from '../../../assets/footer-3.png';
import mockup4 from '../../../assets/footer-4.png';


import textData from '../../../texts';

import style from './footer.module.scss';
import NotePrivacyPolicy from '../../ui/notePrivacyPolicy/notePrivacyPolicy';

function Footer () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].footer

    return (
        <footer className={style.footer}>

            <div className={style.backWrap}>
                <img className={style.img} src={backImg} alt='' />
            </div>

            <ul className={style.imgsGallery}>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup1} alt='Wallpapers mockup' />
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup2} alt='Wallpapers mockup' />
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup3} alt='Wallpapers mockup' />
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup4} alt='Wallpapers mockup' />
                </li>
            </ul>

            <div className={style.titleWrap}>
                <Title text={text.titleTop} isBlack={false}></Title>
                <Title text={text.titleBottom} isBlack={false}></Title>
                <div className={style.handwriteWrap}>
                    <Handwriting text={text.handwrite} color={'white'}></Handwriting>
                </div>
            </div>

            <div className={style.contentWrap}>
                <div className={style.contactsWrap}>
                    <ul className={style.iconsWrap}>
                        <li className={style.icon}>
                            <a className={style.link} href='https://www.instagram.com/fototapete_zg?igsh=MXVyeHc4bDY2Ync4bA=='>
                                <img src={insta} alt='' />
                            </a>
                        </li>
                        <li className={style.icon}>
                            <a className={style.link} href='https://www.facebook.com/profile.php?id=100092530363927'>
                                <img src={fb} alt='' />
                            </a>
                        </li>
                        <li className={style.icon}>
                            <a className={style.link} href='https://pin.it/5nGCrtbyX'>
                                <img src={pinterest} alt='' />
                            </a>
                        </li>
                    </ul>
                    <p className={style.telWrap}><a href='tel:+385-91-6185-191'>+385 91 6185 191</a></p>
                    <a href="mailto:blog@htmlacademy.ru&cc=mail@htmlacademy.ru?body=Привет, подпишитесь на рассылку">Напишите нам</a>
                    <p className={style.mailWrap}><a href="mailto:fototapetezg@gmail.com&cc=fototapetezg.info@gmail.com?body=Hi! I wish I could ask about wallpapers.?subject=Question from website">fototapetezg@gmail.com</a></p>
                </div>
                <div className={style.linksWrap}></div>
            </div>
            <div className={style.underline}>
                <p>© Foto tapete 2024</p>
                <p className={style.privPolicy}>
                    <NotePrivacyPolicy></NotePrivacyPolicy>
                </p>
            </div>
        </footer>
    )
}

export default Footer