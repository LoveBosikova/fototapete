import { NavLink } from 'react-router-dom';
import style from './linkButtonOrange.module.scss';
import { ComponentPropsWithoutRef } from 'react';

type ILinkButtonOrangeProps = {
    text: string;
    link?: string;
} & ComponentPropsWithoutRef<'button'>;

function LinkButtonOrange({ text, link, onClick, ...rest }: ILinkButtonOrangeProps) {
    return (
        <button className={style.linkBtn} onClick={onClick} {...rest}>
            {link ? 
            <NavLink className={style.link} to={link} end>
                {text}
            </NavLink>
        
            : <p>{text}</p>}
        </button>
    );
}

export default LinkButtonOrange;