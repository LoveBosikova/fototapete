import style from './header.module.scss';
import logo from '../../../assets/logo.svg';
import Selector from '../../ui/selector/selector';


function Header () {
    return (
        <header className={style.header}>
            <div className={style.contentWrap}>
                <div className={style.logoWrap}>
                    <img className={style.logoImg} src={logo} alt='Fototapete logo' />
                </div>
                <div className={style.iconsWrap}>
                    <Selector></Selector>
                </div>
            </div>
        </header>

    )
}

export default Header;