import Materials from '../../blocks/materials/materials'
import MaterialsAbout from '../../blocks/materialsAbout/materialsAbout'
import style from './materialsPage.module.scss'

function MaterialsPage () {
    return (
        <div className={style.materialsPage}>
            <MaterialsAbout />
            <Materials />
        </div>
    )
}

export default MaterialsPage