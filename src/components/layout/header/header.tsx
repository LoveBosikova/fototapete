import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Selector from '../../ui/selector/selector';
import UtilIcon from '../../ui/icons/utilIcon/utilIcon';
import ImgHeart from '../../ui/icons/imgHeart/ImgHeart.tsx';
import ImgBug from '../../ui/icons/imgBug/ImgBug.tsx';
import Logo from '../../ui/logo/logo.tsx';

import NavBar from '../navbar/navbar.tsx';
import { $cart } from '../../pages/cart/model.ts';
import { useUnit } from 'effector-react';
import NavbarMobile from '../navbarMobile/navbarMobile.tsx';

import style from './header.module.scss';

function Header () {

    const [isDefaultStyles, setIsDefaultStyles] = useState(true);

    let location = useLocation();

    // useEffect(()=>{
        
    //     (location.pathname === '/' || location.pathname === '/info') ? setIsDefaultStyles(true) : setIsDefaultStyles(false)
    // }, [location])

    useEffect(() => {
        const base = import.meta.env.BASE_URL; // например, '/fototapete/'
        setIsDefaultStyles(
            location.pathname === `${base}` || location.pathname === `${base}info`
        );
    }, [location.pathname]);

    const cart = useUnit($cart)

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
                    <div className={style.selectorWrap}>
                        <NavbarMobile isWhite={isDefaultStyles}/>
                    </div>
                    <div className={style.iconWrap}>
                    <NavLink to='/favourites' className={style.iconWrap} end>
                        <UtilIcon linkTo={''} description={'Go to favorites'}>
                            <ImgHeart></ImgHeart>
                        </UtilIcon>
                    </NavLink>

                    </div>
                    <NavLink to='/cart' className={style.iconWrap} end>
                        <UtilIcon linkTo={''} description={'Go to cart'}>
                            <ImgBug></ImgBug>
                            { cart.length > 0 && <div className={style.counter}><p>{cart.length}</p></div>}
                        </UtilIcon>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;