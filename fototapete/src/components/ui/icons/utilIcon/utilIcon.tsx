import style from './utilIcon.module.scss';

type IUtilIconProps = {
    img: string;
    linkTo: string;
    description: string;
}

// Иконки, предназначенные не для соцсетей, тёмные
function UtilIcon (props: IUtilIconProps) {

    const { img, linkTo, description } = props

    return ( 
    <button className={style.utilIcon}>
        <a className={style.link} href={linkTo} target='blank'>
            <img className={style.icon} src={img} alt={description} />
        </a>
    </button>
    )
}

export default UtilIcon;