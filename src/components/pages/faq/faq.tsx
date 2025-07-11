import { useEffect, useRef } from 'react'
import styles from './faq.module.scss'
import CommonQuestions from '../../blocks/commonQuestions/commonQuestions'


function FaqPage () {
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
        <div className={styles.faqPage} ref={containerRef}>
            <CommonQuestions />
        </div>
    )
}

export default FaqPage