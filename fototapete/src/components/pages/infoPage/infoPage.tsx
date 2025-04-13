import style from './infoPage.module.scss'
import MainAbout from '../../blocks/mainAbout/mainAbout'
import OurMission from '../../blocks/ourMission/ourMission'
import AdditionalServices from '../../blocks/additionalServices/additionalServices'
import ImMedia from '../../blocks/imMedia/imMedia'

function InfoPage () {
    return (
        <div className={style.infoPage}>
            <MainAbout />
            <OurMission />
            <AdditionalServices />
            <ImMedia />
        </div>
    )
}

export default InfoPage