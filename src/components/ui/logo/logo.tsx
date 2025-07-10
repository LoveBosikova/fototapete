// import logoWhite from '../../../assets/logo.svg';
// import colorfulLogo from '../../../assets/colorfulLogo.svg';
import { ReactComponent as LogoWhite } from '../../../assets/logo.svg';
import { ReactComponent as ColorfulLogo } from '../../../assets/colorfulLogo.svg';

import style from './logo.module.scss';
import { NavLink } from 'react-router-dom';

type ILogoProps = {
    isWhite: boolean
}

function Logo (props: ILogoProps) {
    const { isWhite } = props
    const LogoComponent = isWhite ? LogoWhite : ColorfulLogo;
    return(
        <NavLink to='' end>
                {/* <img className={style.logoImg} src={isWhite? logoWhite : colorfulLogo} alt='Fototapete logo' /> */}
                <LogoComponent className={style.logoImg} aria-label='Fototapete logo' />
        </NavLink>
    ) 
}

export default Logo