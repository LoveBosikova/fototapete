import { NavLink } from "react-router";

import style from './navbar.module.scss';

function NavBar () {
    return (
        <nav className={style.navbar}>
            <ul className={style.linksWrap}>
            <NavLink to='/fototapete/catalog' end>
                <li className={style.linkWrap}><p className={style.link}>Catalog</p></li>
            </NavLink>
                {/* <li className={style.linkWrap}><a className={style.link} href='#'>Catalog</a></li> */}
                <li className={style.linkWrap}><a className={style.link} href='#'>Сustom design</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Price</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Info</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Materials</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;