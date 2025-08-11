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
                <div className={style.link}> 
                {text}
                </div>
            </NavLink>
        
            : <div className={style.link}> 
                {text}
            </div>}
        </button>
    );
}

export default LinkButtonOrange;