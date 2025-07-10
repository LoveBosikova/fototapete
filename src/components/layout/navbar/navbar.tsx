import { NavLink } from "react-router";

import style from './navbar.module.scss';
import { useState } from "react";
// import { Modal } from "../../ui/modal/Modal";

type INavBarProps = {
    isWhite: boolean
}

function NavBar (props: INavBarProps) {
    const { isWhite } = props
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    

    return (
    <div 
        className={style.navbarContainer}
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
    >
        <nav className={isWhite? style.navbarColorful : style.navbar}
            >
            <ul className={style.linksWrap}>
            <NavLink to='/catalog' end>
                <li className={style.linkWrap}><p className={style.link}>Catalog</p></li>
            </NavLink>
            <NavLink to='/catalog' end>
                <li className={style.linkWrap}><p className={style.link}>Сustom design</p></li>
            </NavLink>
            <NavLink to={{
                        pathname: "/",
                        hash: "#calculate",
                    }}>
                <li className={style.linkWrap}><p className={style.link}>Price</p></li>
            </NavLink>
            <NavLink to='/info'>
                <li className={style.linkWrap}><p className={style.link}>Info</p></li>
            </NavLink>
            <NavLink to='/materials' end>
                <li className={style.linkWrap}><p className={style.link}>Materials</p></li>
            </NavLink>
            </ul>
        </nav>
            <div className={isSubMenuOpen ? style.subMenu : style.subMenu__hidden}
            >
                {/* Подменю */}
                <ul className={style.subMenuItem}>
                    <NavLink to='/gallery' end>
                        <li className={style.linkWrap}><p className={style.link}>Wallpapers</p></li>
                    </NavLink>
                    <NavLink to='/materials' end>
                        <li className={style.linkWrap}><p className={style.link}>Other</p></li>
                    </NavLink>
                </ul>
                <div className={style.subMenuItem}></div>
                <div className={style.subMenuItem}></div>
                <ul className={style.subMenuItem}>
                    <NavLink to='/info' end>
                        <li className={style.linkWrap}><p className={style.link}>About us</p></li>
                    </NavLink>
                    <NavLink to='/beforeAfter' end>
                        <li className={style.linkWrap}><p className={style.link}>Before & after</p></li>
                    </NavLink>
                    <NavLink to='/instructions' end>
                        <li className={style.linkWrap}><p className={style.link}>Instructions</p></li>
                    </NavLink>
                    <NavLink to='/faq' end>
                        <li className={style.linkWrap}><p className={style.link}>FAQ</p></li>
                    </NavLink>
                </ul>
                <div className={style.subMenuItem}></div>
            </div>
    </div>
    )
}

export default NavBar;

