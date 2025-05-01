import { NavLink } from 'react-router-dom';
import style from './linkButtonOrange.module.scss';

type ILinkButtonOrangeProps = {
    text: string;
    link: string;
    onClick?: () => void
}

function LinkButtonOrange (props: ILinkButtonOrangeProps) {

    const { text, link, onClick } = props;
    
return (
        <button className={style.linkBtn} onClick={onClick? onClick : ()=> {}}>
            <NavLink className={style.link} to={link} end>
                {text}
            </NavLink>
        </button>
    )
}

export default LinkButtonOrange;