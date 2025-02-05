import logo from '../../../assets/logo.svg';
import Selector from '../../ui/selector/selector';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';

import style from './header.module.scss';
import ImgHeart from '../../ui/icons/imgHeart/ImgHeart.tsx';
import ImgBug from '../../ui/icons/imgBug/ImgBug.tsx';

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
                        <UtilIcon linkTo={''} description={'Go to favorites'}>
                            <ImgHeart></ImgHeart>
                        </UtilIcon>
                    </div>
                    <div className={style.iconWrap}>
                        <UtilIcon linkTo={''} description={'Go to favorites'}>
                            <ImgBug></ImgBug>
                        </UtilIcon>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;