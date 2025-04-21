import { NavLink } from 'react-router-dom';
import style from './linkButtonBlack.module.scss';

type ILinkButtonBlackProps = {
    text: string;
    link: string;
}

function LinkButtonBlack (props: ILinkButtonBlackProps) {

    const { text, link } = props;

return (
    <NavLink className={style.link} to={link} end>
        <button className={style.linkBtn}>
                {text}
        </button>
    </NavLink>
    )
}

export default LinkButtonBlack;