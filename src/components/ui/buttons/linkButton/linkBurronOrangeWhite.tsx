// import { NavLink } from 'react-router-dom';
// import style from './linkButtonOrangeWhite.module.scss';

// type ILinkButtonOrangeWhiteProps = {
//     text: string;
//     link: string;
// }

// function LinkButtonOrangeWhite (props: ILinkButtonOrangeWhiteProps) {

//     const { text, link } = props;

// return (
//     <NavLink className={style.link} to={link} end>
//         <button className={style.linkBtn}>
//             {text}
//         </button>
//     </NavLink>
//     )
// }

// export default LinkButtonOrangeWhite;

import { NavLink } from 'react-router-dom';
import style from './linkButtonOrange.module.scss';
import { ComponentPropsWithoutRef } from 'react';

type ILinkButtonOrangeWhiteProps = {
    text: string;
    link?: string;
} & ComponentPropsWithoutRef<'button'>;

function LinkButtonOrange({ text, link, onClick, ...rest }: ILinkButtonOrangeWhiteProps) {
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