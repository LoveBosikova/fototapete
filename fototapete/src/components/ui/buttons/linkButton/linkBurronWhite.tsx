import { NavLink } from 'react-router-dom';
import style from './linkButtonWhite.module.scss';

type ILinkButtonWhiteProps = {
    text: string;
    link: string;
}

function LinkButtonWhite (props: ILinkButtonWhiteProps) {

    const { text, link } = props;

return (
    <NavLink className={style.link} to={link} end>
        <button className={style.linkBtn}>
                {text}
        </button>
    </NavLink>
    )
}

export default LinkButtonWhite;