import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';

import backImgBig from '../../../assets/footer-back-big.png';
import mockup1 from '../../../assets/footer-1.png';
import mockup2 from '../../../assets/footer-2.png';
import mockup3Big from '../../../assets/footer-3-big.png';
import mockup4 from '../../../assets/footer-4.png';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';
import ImgFb from '../../ui/icons/imgFb/imgFb';
import ImgInstagram from '../../ui/icons/imgInstagram/imgInstagram';
import ImgPinterest from '../../ui/icons/imgPinterest/imgPinterest';
import ImgUp from '../../ui/icons/imgUp/imgUp';

import textData from '../../../texts';

import style from './footer.module.scss';

function Footer () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].footer

    function handleScrollUp () {
        window.scrollTo({top: 0, behavior: 'smooth'}) 
    }

    return (
        <footer className={style.footer}>
            <div className={style.backWrap}>
                <picture className={style.img} >
                    <source
                        media="(max-width: 720px)"
                        srcSet="/footer-back-small.png 720w"
                        sizes="720px"
                    />
                    <source
                        media="(min-width: 1140px)"
                        srcSet="/footer-back-big.png 1140w"
                        sizes="1140px"
                    />
                    <source
                        srcSet="/footer-back-medium.png 720w"
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
                            srcSet="/footer-3-big.png 1140w"
                            sizes="1140px"
                        />
                        <source
                            srcSet="/footer-3-medium.png 720w"
                            sizes="720px"
                        />
                        <img  className={style.imgMockUp} src={mockup3Big} />
                    </picture>
                </li>
                <li className={style.imgWrap}>
                    <img className={style.imgMockUp} src={mockup4} alt='Wallpapers mockup' />
                </li>
            </ul>

            <button className={style.btnUp} onClick={handleScrollUp}>
                <ImgUp></ImgUp>
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
                            <UtilIcon linkTo={'https://www.instagram.com_zg?igsh=MXVyeHc4bDY2Ync4bA=='} description='Go to Instagrsm'>
                                <ImgInstagram></ImgInstagram>
                            </UtilIcon>
                        </li>
                        <li className={style.icon}>
                            <UtilIcon linkTo={'https://www.facebook.com/profile.php?id=100092530363927'} description='Go to facebook'>
                                <ImgFb></ImgFb>
                            </UtilIcon>
                        </li>
                        <li className={style.icon}>
                            <UtilIcon linkTo={'https://pin.it/5nGCrtbyX'} description='Go to Pinterest'>
                                <ImgPinterest></ImgPinterest>
                            </UtilIcon>
                        </li>
                    </ul>
                    <p className={style.telWrap}><a className={style.tel} href='tel:+385-91-6185-191'>+385 91 6185 191</a></p>
                    <p className={style.mailWrap}><a className={style.email} href="mailto:fototapetezg@gmail.com&cc=fototapetezg.info@gmail.com?body=Hi! I wish I could ask about wallpapers.?subject=Question from website">fototapetezg@gmail.com</a></p>
                </div>
                <ul className={style.linksWrap}>
                    {text.links.map((link)=><NavLink 
                    key={link.linkName} 
                    className={style.menuItemWrap} 
                    to={`/catalog`} 
                    end>
                        <a className={style.menuItem}>{link.linkName}</a>
                    </NavLink>)}
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