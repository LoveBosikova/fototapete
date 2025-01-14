import style from './linkButtonOrange.module.scss';

type ILinkButtonOrangeProps = {
    text: string;
    link: string;
}

function LinkButtonOrange (props: ILinkButtonOrangeProps) {

    const { text, link } = props;
    
return (
    <button className={style.linkBtn}>
        <a className={style.link} href={link}>
            {text}
        </a>
    </button>
    )
}

export default LinkButtonOrange;