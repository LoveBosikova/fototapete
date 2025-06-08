import { useEffect, useRef } from 'react';
import Materials from '../../blocks/materials/materials'
import MaterialsAbout from '../../blocks/materialsAbout/materialsAbout'
import style from './materialsPage.module.scss'

function MaterialsPage () {

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
        <div className={style.materialsPage} ref={containerRef}>
            <MaterialsAbout />
            <Materials />
        </div>
    )
}

export default MaterialsPage