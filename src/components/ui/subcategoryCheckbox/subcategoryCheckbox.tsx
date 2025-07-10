import emptyCheckbox from '../../../assets/subcategoryCheckbox.svg';
import activeCheckbox from '../../../assets/checkboxSearchChecked.svg';

import style from './subcategoryCheckbox.module.scss';

type ISubcategoryCheckboxProps = {
    isActive: boolean
}

function SubcategoryCheckbox (props: ISubcategoryCheckboxProps) {
    const { isActive } = props

    return (
        <div className={style.checkbox}>
            <div className={style.square}>
                <img className={style.img} src={emptyCheckbox} alt="" />
                {isActive ? <img className={style.mark} src={activeCheckbox} alt="" /> : null}
            </div>
        </div>
    )
}

export default SubcategoryCheckbox