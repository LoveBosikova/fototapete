import { NavLink } from "react-router";

import style from './navbar.module.scss';

type INavBarProps = {
    isWhite: boolean
}

function NavBar (props: INavBarProps) {
    const { isWhite } = props

    return (
        <nav className={isWhite? style.navbarColorful : style.navbar}>
            <ul className={style.linksWrap}>
            <NavLink to='/catalog' end>
                <li className={style.linkWrap}><p className={style.link}>Catalog</p></li>
            </NavLink>
            <NavLink to='/calculate' end>
                <li className={style.linkWrap}><p className={style.link}>Сustom design</p></li>
            </NavLink>
            <NavLink to={{
                        pathname: "/",
                        hash: "#calculate",
                    }}>
                <li className={style.linkWrap}><p className={style.link}>Price</p></li>
            </NavLink>
            <NavLink to={{
                        pathname: "/",
                        hash: "#calculate",
                    }}>
                <li className={style.linkWrap}><p className={style.link}>Info</p></li>
            </NavLink>
            <NavLink to='/materials' end>
                <li className={style.linkWrap}><p className={style.link}>Materials</p></li>
            </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;