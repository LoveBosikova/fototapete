import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import backImgBig from '../../../assets/footer-back-big.png';
import insta from '../../../assets/icon-instagram.png';
import fb from '../../../assets/icon-fb.png';
import pinterest from '../../../assets/icon-pinterest.png';
import mockup1 from '../../../assets/footer-1.png';
import mockup2 from '../../../assets/footer-2.png';
import mockup3Big from '../../../assets/footer-3-big.png';

import mockup4 from '../../../assets/footer-4.png';
import goUp from '../../../assets/btn-up.png';

import textData from '../../../texts';

import style from './footer.module.scss';

function Footer () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].footer

    return (
        <footer className={style.footer}>
            <div className={style.backWrap}>
                <picture className={style.img} >
                    <source
                        media="(max-width: 720px)"
                        srcSet="/fototapete/footer-back-small.png 720w"
                        sizes="720px"
                    />
                    <source
                        media="(min-width: 1140px)"
                        srcSet="/fototapete/footer-back-big.png 1140w"
                        sizes="1140px"
                    />
                    <source
                        srcSet="/fototapete/footer-back-medium.png 720w"
                        sizes="720px"
                    />
                    <img  className={style.img} src={backImgBig} />
                </picture>
            </div>
            <ul className={style.imgsGallery}>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup1} alt='Wallpapers mockup' />
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup2} alt='Wallpapers mockup' />
                </li>
                <li className={style.imgWrap}>
                    <picture className={style.imgMockUp} >
                        <source
                            media="(min-width: 1140px)"
                            srcSet="/fototapete/footer-3-big.png 1140w"
                            sizes="1140px"
                        />
                        <source
                            srcSet="/fototapete/footer-3-medium.png 720w"
                            sizes="720px"
                        />
                        <img  className={style.imgMockUp} src={mockup3Big} />
                    </picture>
                    {/* <img className={style.imgMockUp} src={mockup3Big} alt='Wallpapers mockup' /> */}
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup4} alt='Wallpapers mockup' />
                </li>
            </ul>

            <button className={style.btnUp}>
                <img className={style.img} src={goUp} alt='Go up' />
            </button>

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
                                <img className={style.img} src={insta} alt='' />
                            </a>
                        </li>
                        <li className={style.icon}>
                            <a className={style.link} href='https://www.facebook.com/profile.php?id=100092530363927'>
                                <img className={style.img} src={fb} alt='' />
                            </a>
                        </li>
                        <li className={style.icon}>
                            <a className={style.link} href='https://pin.it/5nGCrtbyX'>
                                <img className={style.img} src={pinterest} alt='' />
                            </a>
                        </li>
                    </ul>
                    <p className={style.telWrap}><a className={style.tel} href='tel:+385-91-6185-191'>+385 91 6185 191</a></p>
                    <p className={style.mailWrap}><a className={style.email} href="mailto:fototapetezg@gmail.com&cc=fototapetezg.info@gmail.com?body=Hi! I wish I could ask about wallpapers.?subject=Question from website">fototapetezg@gmail.com</a></p>
                </div>
                <ul className={style.linksWrap}>
                    {text.links.map((link)=> <li key={link.linkName} className={style.menuItemWrap}><a className={style.menuItem}>{link.linkName}</a></li>)}
                </ul>
            </div>
            <div className={style.underline}>
                <p>© Foto tapete 2024</p>
                <a className={style.privPolicy} href="http://">Privacy policy</a>
            </div>
        </footer>
    )
}

export default Footer