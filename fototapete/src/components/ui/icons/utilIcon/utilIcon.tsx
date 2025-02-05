import { Children } from 'react';
import style from './utilIcon.module.scss';

type IUtilIconProps = {
    children: React.ReactNode;
    linkTo: string;
    description: string;
}

// Иконки, предназначенные не для соцсетей, тёмные
function UtilIcon (props: IUtilIconProps) {

    const { linkTo, children } = props

    return ( 
    <button className={style.utilIcon}>
        <a className={style.link} href={linkTo} target='blank'>
            {children}
        </a>
    </button>
    )
}

export default UtilIcon;