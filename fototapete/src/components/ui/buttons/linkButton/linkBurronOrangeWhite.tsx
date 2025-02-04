import style from './linkButtonOrangeWhite.module.scss';

type ILinkButtonOrangeWhiteProps = {
    text: string;
    link: string;
}

function LinkButtonOrangeWhite (props: ILinkButtonOrangeWhiteProps) {

    const { text, link } = props;

return (
    <button className={style.linkBtn}>
        <a className={style.link} href={link}>
            {text}
        </a>
    </button>
    )
}

export default LinkButtonOrangeWhite;