import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Selector from '../../ui/selector/selector';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';
import ImgHeart from '../../ui/icons/imgHeart/ImgHeart.tsx';
import ImgBug from '../../ui/icons/imgBug/ImgBug.tsx';

import style from './header.module.scss';
import NavBar from '../navbar/navbar.tsx';
import Logo from '../../ui/logo/logo.tsx';

function Header () {

    const [isDefaultStyles, setIsDefaultStyles] = useState(true);

    let location = useLocation();

    useEffect(()=>{
        location.pathname === '/fototapete' ? setIsDefaultStyles(true) : setIsDefaultStyles(false)
    }, [location])

    return (
        <header className={style.header}>
            <NavBar isWhite={isDefaultStyles}></NavBar>
            <div className={style.logoWrap}>
                <Logo isWhite={isDefaultStyles}></Logo>   
            </div>
            <div className={style.contentWrap}>
                {/* <div className={style.logoWrap}>
                    <img className={style.logoImg} src={logo} alt='Fototapete logo' />
                </div> */}
                <div className={style.iconsWrap}>
                    <div className={style.selectorWrap}>
                        <Selector isWhite={isDefaultStyles}></Selector>  
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