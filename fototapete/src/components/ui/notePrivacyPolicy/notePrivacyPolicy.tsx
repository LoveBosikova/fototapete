import style from './notePrivacyPolicy.module.scss';

function NotePrivacyPolicy () {
    return (
        <div className={style.notePrivacyPolicy}>
            <p className={style.text}>By clicking «Subscribe» you agree with the <span className={style.link}>Privacy policy</span></p>
        </div>
    )
}

export default NotePrivacyPolicy