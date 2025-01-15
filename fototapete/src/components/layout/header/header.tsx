import style from './header.module.scss';
import logo from '../../../assets/logo.svg';
import Selector from '../../ui/selector/selector';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';
import iconHeart from '../../../assets/icon-heart.svg'
import iconBug from '../../../assets/icon-bug.svg'



function Header () {
    return (
        <header className={style.header}>
            <div className={style.contentWrap}>
                <div className={style.logoWrap}>
                    <img className={style.logoImg} src={logo} alt='Fototapete logo' />
                </div>
                <div className={style.iconsWrap}>
                    <div className={style.selectorWrap}>
                        <Selector></Selector>  
                    </div>
                    <div className={style.iconWrap}>
                        <UtilIcon img={iconHeart} linkTo={''} description={'Go to favorites'}></UtilIcon>
                    </div>
                    <div className={style.iconWrap}>
                        <UtilIcon img={iconBug} linkTo={''} description={'Go to cart'}></UtilIcon>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;