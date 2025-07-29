import { useContext, useEffect, useRef } from 'react'
import styles from './otherPage.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import OtherMain from '../../blocks/otherMain/otherMain'
import OtherKinds from '../../blocks/otherKinds/otherKinds'
import ImMedia from '../../blocks/imMedia/imMedia'
import OtherGallery from '../../blocks/otherGallery/otherGallery'
import OtherOrder from '../../blocks/otherOrder/otherOrder'

function OtherPage () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].otherMedia

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
        <div className={styles.otherPage} ref={containerRef}>
            <OtherMain />
            <OtherKinds />
            <OtherGallery />
            <OtherOrder />
            <ImMedia title={text.title}/>
        </div>
    )
}

export default OtherPage