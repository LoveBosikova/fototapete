import style from './handwriting.module.scss';

type IHandwritingProps = {
    text: string;
    color: string; // white | orange | black
}

function Handwriting (props: IHandwritingProps) {
    const { text, color } = props;

    const className = color === 'white' ? style.handwritingWhite 
                    : color === 'black' ? style.handwritingBlack : style.handwritingOrange;

    return (
        <h1 className={className}>{text}</h1>
    )
}

export default Handwriting;