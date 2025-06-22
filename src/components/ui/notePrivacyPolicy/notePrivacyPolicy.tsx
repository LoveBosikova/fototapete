import { NavLink } from 'react-router-dom';
import style from './notePrivacyPolicy.module.scss';

function NotePrivacyPolicy () {
    return (
        <div className={style.notePrivacyPolicy}>
            <p className={style.text}>By clicking «Subscribe» you agree with the
                <NavLink to={`/privacy_policy`}> <span className={style.link}>Privacy policy</span> </NavLink></p>
        </div>
    )
}

export default NotePrivacyPolicy