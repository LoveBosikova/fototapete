import { NavLink } from 'react-router-dom';
import style from './linkButtonOrange.module.scss';

type ILinkButtonOrangeProps = {
    text: string;
    link: string;
}

function LinkButtonOrange (props: ILinkButtonOrangeProps) {

    const { text, link } = props;
    
return (
        <button className={style.linkBtn}>
            <NavLink className={style.link} to={link} end>
                {text}
            </NavLink>
        </button>
    )
}

export default LinkButtonOrange;