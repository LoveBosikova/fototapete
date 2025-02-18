import emptyCheckbox from '../../../assets/subcategoryCheckbox.svg';
import activeCheckbox from '../../../assets/checkboxSearchChecked.svg';

import style from './subcategoryCheckbox.module.scss';

type ISubcategoryCheckboxProps = {
    isActive: boolean
}

function SubcategoryCheckbox (props: ISubcategoryCheckboxProps) {
    const { isActive } = props
    console.log(isActive);
    return (
        <div className={style.checkbox}>
            <div className={style.square}>
                <img className={style.img} src={emptyCheckbox} alt="" />
            </div>
            <div className={isActive? style.mark : style.markHidden}>
                <img className={style.img} src={activeCheckbox} alt="" />
            </div>
        </div>
    )
}

export default SubcategoryCheckbox