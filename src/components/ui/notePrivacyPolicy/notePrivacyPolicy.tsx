import { NavLink } from 'react-router-dom';
import style from './notePrivacyPolicy.module.scss';

type TNotePrivacyPolicy = {
    text?: string;
    color?: "white" | "black";
}

function NotePrivacyPolicy (props: TNotePrivacyPolicy ) {
    const { text, color = "white" } = props
    return (
        <div className={color === "white"? style.notePrivacyPolicy : style.notePrivacyPolicy__black}>
            <p className={color === "white"? style.text : style.text__black}> {text? text: "By clicking «Subscribe» you agree with the"}
            <NavLink to={`/privacy_policy`}> <span className={color === "white"? style.link : style.link__black}>Privacy policy</span> </NavLink></p>
        </div>
    )
}

export default NotePrivacyPolicy