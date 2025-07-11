import { useEffect, useRef } from 'react'
import styles from './pricePage.module.scss'
import Calculate from '../../blocks/calculate/calculate'


function PricePage () {
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
        <div className={styles.pricePage} ref={containerRef}>
            <Calculate />
        </div>
    )
}

export default PricePage