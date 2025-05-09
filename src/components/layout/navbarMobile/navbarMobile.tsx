import { useState } from 'react';



import line from '../../../assets/line.png'

import style from './navbarMobile.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type ISelectorProps = {
    isWhite: boolean
}

function NavbarMobile (props: ISelectorProps) {
    const { isWhite } = props

    // Состояние нужно, чтобы элемент обновлялся сам после выбора новой опции, а не только менял значение контекста
    const [ curLink, setCurLink ] = useState<string>('/')

    // Открыт - закрыт селект 
    const [ isOpen, setIsOpen ] = useState(false);

    function handleIsOpen () {
        setIsOpen(!isOpen)
    }
    const options = classNames(
        isWhite ? style.optionsWhite : style.optionsColorful,
        isOpen ? style.options : style.closedOptions,
    );

    return (
        <div className={isWhite ? style.selectorWrap : style.selectorWrapColorful}>
            <div className={style.langWrap} onClick={handleIsOpen}>
                <div className={style.arrowWrap}>
                    <img className={style.line} src={line} alt='' />
                    <img className={style.line} src={line} alt='' />
                    <img className={style.line} src={line} alt='' />
                </div>
            </div>
            <ul className={options}>
                <NavLink 
                to='/catalog' 
                onClick={() => {
                    setCurLink('/catalog')
                    handleIsOpen()
                } } 
                className={curLink !== '/catalog' ? style.option : style.currentOption}
                end>
                    <li className={style.linkWrap}><p className={style.link}>Catalog</p></li>
                </NavLink>
                <NavLink 
                to='/info' 
                onClick={() => {
                    setCurLink('/info')
                    handleIsOpen()
                }} end
                className={curLink !== '/info' ? style.option : style.currentOption} 
                >
                    <li className={style.linkWrap}><p className={style.link}>Info</p></li>
                </NavLink>
                <NavLink 
                to='/materials' 
                onClick={() => {
                    setCurLink('/materials')
                    handleIsOpen()
                }} 
                className={curLink !== '/materials' ? style.option : style.currentOption} 
                end>
                    <li className={style.linkWrap}><p className={style.link}>Materials</p></li>
                </NavLink>
            </ul>
        </div>
    )
}

export default NavbarMobile;