import style from './infoPage.module.scss'
import MainAbout from '../../blocks/mainAbout/mainAbout'
import OurMission from '../../blocks/ourMission/ourMission'
import AdditionalServices from '../../blocks/additionalServices/additionalServices'
import ImMedia from '../../blocks/imMedia/imMedia'
import { useEffect, useRef } from 'react'

function InfoPage () {

    
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <div className={style.infoPage} ref={containerRef}>
            <MainAbout />
            <OurMission />
            <AdditionalServices />
            <ImMedia />
        </div>
    )
}

export default InfoPage