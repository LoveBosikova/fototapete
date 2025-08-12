import { useEffect, useRef } from 'react'
import styles from './CustomDesignPage.module.scss'
import CustomDesignMain from '../../blocks/mainCustomDesign/mainCustomDesign';
import AdditionalServices from '../../blocks/additionalServices/additionalServices';

function CustomDesignPage () {

    // const { lang } = useContext(LangContext)
    // const langValue = lang.value.toLowerCase()

    // const text = textData[langValue as keyof typeof textData].otherMedia

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
        <div className={styles.customDesignPage} ref={containerRef}>
            <CustomDesignMain />
            <AdditionalServices />
        </div>
    )
}

export default CustomDesignPage