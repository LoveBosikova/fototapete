import { useContext } from 'react';
import style from './subscribeBtn.module.scss';
import { LangContext } from '../../../../context/LangContext';
import textData from '../../../../texts';

type ISubscribeBtnProps = {
    link: string;
}

function SubscribeBtn (props: ISubscribeBtnProps) {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const textBtn = textData[langValue as keyof typeof textData].btns

    const { link } = props;
    
return (
    <button className={style.linkBtn}>
        <a className={style.link} href={link}>
            {textBtn.subscribe}
        </a>
    </button>
    )
}

export default SubscribeBtn;