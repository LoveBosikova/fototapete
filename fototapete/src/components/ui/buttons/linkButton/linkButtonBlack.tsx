import style from './linkButtonBlack.module.scss';

type ILinkButtonBlackProps = {
    text: string;
    link: string;
}

function LinkButtonBlack (props: ILinkButtonBlackProps) {

    const { text, link } = props;

return (
    <button className={style.linkBtn}>
        <a className={style.link} href={link}>
            {text}
        </a>
    </button>
    )
}

export default LinkButtonBlack;