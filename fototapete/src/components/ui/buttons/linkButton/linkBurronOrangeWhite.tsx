import { NavLink } from 'react-router-dom';
import style from './linkButtonOrangeWhite.module.scss';

type ILinkButtonOrangeWhiteProps = {
    text: string;
    link: string;
}

function LinkButtonOrangeWhite (props: ILinkButtonOrangeWhiteProps) {

    const { text, link } = props;

return (
    <NavLink className={style.link} to={link} end>
        <button className={style.linkBtn}>
            {text}
        </button>
    </NavLink>
    )
}

export default LinkButtonOrangeWhite;