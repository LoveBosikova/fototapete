import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Selector from '../../ui/selector/selector';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';
import ImgHeart from '../../ui/icons/imgHeart/ImgHeart.tsx';
import ImgBug from '../../ui/icons/imgBug/ImgBug.tsx';

import NavBar from '../navbar/navbar.tsx';
import Logo from '../../ui/logo/logo.tsx';

import style from './header.module.scss';

function Header () {

    const [isDefaultStyles, setIsDefaultStyles] = useState(true);

    let location = useLocation();

    useEffect(()=>{
        location.pathname === '/fototapete' || '/fototapete/info'  || '/' ? setIsDefaultStyles(true) : setIsDefaultStyles(false)
    }, [location])

    return (
        <header className={style.header}>
            <NavBar isWhite={isDefaultStyles}></NavBar>
            <div className={style.logoWrap}>
                <Logo isWhite={isDefaultStyles}></Logo>   
            </div>
            <div className={style.contentWrap}>
                <div className={style.iconsWrap}>
                    <div className={style.selectorWrap}>
                        <Selector isWhite={isDefaultStyles}></Selector>  
                    </div>
                    <div className={style.iconWrap}>
                        <UtilIcon linkTo={''} description={'Go to favorites'}>
                            <ImgHeart></ImgHeart>
                        </UtilIcon>
                    </div>
                    <NavLink to='/fototapete/cart' className={style.iconWrap} end>
                        <UtilIcon linkTo={''} description={'Go to favorites'}>
                            <ImgBug></ImgBug>
                        </UtilIcon>
                    </NavLink>
                </div>
            </div>
        </header>

    )
}

export default Header;