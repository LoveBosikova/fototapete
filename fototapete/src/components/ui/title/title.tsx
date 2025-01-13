import style from './title.module.scss';


type ITitileProps = {
    text: string;
    isBlack: boolean;
}

function Title (props: ITitileProps) {
    const { text, isBlack } = props;
    return (
        <h1 className={isBlack ? style.title : style.whiteTitle }>{text}</h1>
    )
}

export default Title;
