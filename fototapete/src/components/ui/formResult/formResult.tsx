import style from './formResult.module.scss';

type IFormResultProps = {
    text: string;
    value: string;
}

function FormResult (props: IFormResultProps) {

    const { text, value } = props;

    return (
        <div className={style.formResult}>
            <p className={style.description}>{text}</p>
            <p className={style.result}>{value}</p>
        </div>
    )
}

export default FormResult