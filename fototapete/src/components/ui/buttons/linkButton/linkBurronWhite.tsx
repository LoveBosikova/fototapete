import style from './linkButtonWhite.module.scss';

type ILinkButtonWhiteProps = {
    text: string;
    link: string;
}

function LinkButtonWhite (props: ILinkButtonWhiteProps) {

    const { text, link } = props;

return (
    <button className={style.linkBtn}>
        <a className={style.link} href={link}>
            {text}
        </a>
    </button>
    )
}

export default LinkButtonWhite;