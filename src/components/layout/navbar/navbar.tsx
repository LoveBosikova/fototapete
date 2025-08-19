import { NavLink } from "react-router";

import style from './navbar.module.scss';
import { useContext, useState } from "react";
import { LangContext } from "../../../context/LangContext";
import textData from "../../../texts";


type INavBarProps = {
    isWhite: boolean
}

function NavBar (props: INavBarProps) {
    const { isWhite } = props
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].header_main
    

    return (
    <div 
        className={style.navbarContainer}
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
    >
        <nav className={isWhite? style.navbarColorful : style.navbar}
            >
            <ul className={style.linksWrap}>
                {text.topLinks.map((link) => <NavLink to={link.linkTo} end>
                <li className={style.linkWrap}><p className={style.link}>{link.linkName}</p></li>
            </NavLink>)}
            </ul>
        </nav>
            <div className={isSubMenuOpen ? style.subMenu : style.subMenu__hidden}
            >
                <ul className={style.subMenuItem}>
                </ul>
                <ul className={style.subMenuItem}>
                    {text.subLinksFilms.map((link) => <NavLink to={link.linkTo} end>
                        <li className={style.linkWrap}><p className={style.link}>{link.linkName}</p></li>
                    </NavLink>)}
                </ul>
                <div className={style.subMenuItem}></div>
                <ul className={style.subMenuItem}>
                    {text.subLinksInfo.map((link) => <NavLink to={link.linkTo} end>
                        <li className={style.linkWrap}><p className={style.link}>{link.linkName}</p></li>
                    </NavLink>)}
                </ul>
                <div className={style.subMenuItem}></div>
            </div>
    </div>
    )
}

export default NavBar;

