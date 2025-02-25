import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../../../context/LangContext';
import { CurCategoryContext } from '../../../context/curCategoryContext';
import { NavLink } from 'react-router-dom';

import SubcategoryCheckbox from '../subcategoryCheckbox/subcategoryCheckbox';
import arrow from '../../../assets/subcategoryArrow.svg';

import textData from '../../../texts';
import prepareTextToLink from '../../../utils/prepareTextToLink';

import style from './search.module.scss';

type ISearchProps = {
    chosenSubcategories: string[];
    setChosenSubcategories: React.Dispatch<React.SetStateAction<string[]>>;
    chosenColors: string[];
    setChosenColors: React.Dispatch<React.SetStateAction<string[]>>;
}

function Search (props: ISearchProps) {
    const { lang } = useContext(LangContext)
    const {curCategory, setCurCategory} = useContext(CurCategoryContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].categoriesPage

    const {
        chosenSubcategories, 
        setChosenSubcategories,
        chosenColors,
        setChosenColors,
    } = props

    const category = text.categories.filter((i)=> prepareTextToLink(i.categoryName) == prepareTextToLink(curCategory))

    console.log(text.categories.filter((i)=> prepareTextToLink(i.categoryName)));

    const [ isOthersCategoriesOpen, setIsOthersCategoriesOpen ] = useState(false)  // Subcategories visibility state
    const [ isColorsOpen, setIsColorsOpen ] = useState(false)  // Colors visibility state

    const [ newCategory, setNewCategory ] = useState(category)

    // Handle subcategories checkboxes
    function handleCheckbox (categoryName: string) {
        if (chosenSubcategories.includes(categoryName)) {
            setChosenSubcategories(chosenSubcategories.filter((i) => i !== categoryName))
        } else setChosenSubcategories([...chosenSubcategories, categoryName])
    }

    // Handle subcategories visibility
    function handleOthersCategoriesVisibility () {
        setIsOthersCategoriesOpen(!isOthersCategoriesOpen)
    }

    // Handle colors checkboxes
    function handleColorCheckbox (color: string) {
        if (chosenColors.includes(color)) {
            setChosenColors(chosenColors.filter((i) => i !== color))
        } else setChosenColors([...chosenColors, color])
    }

    // Handle colors visibility
    function handleColorsVisibility () {
        setIsColorsOpen(!isColorsOpen)
    }

    // Handle current category
    function handleCurCategory (str: string) {
        setCurCategory(str)
    }

    useEffect(() => {
        console.log(curCategory);
        console.log(text.categories.filter((i)=> prepareTextToLink(i.categoryName) == prepareTextToLink(curCategory)));
        setNewCategory(text.categories.filter((i)=> prepareTextToLink(i.categoryName) == prepareTextToLink(curCategory)))
    }, [curCategory]);

    return (
        <div className={style.search}>
            {newCategory.map((i) => i.categoryName) || <h3 className={style.searchTitle}>{category.map((i) => i.categoryName)}</h3>}
            <ul className={style.results}>
                {category.map((i)=> i.subCategories.map((subCategory) => {
                    return (
                        <li key={subCategory} className={style.subcategoryCheckbox} onClick={()=> handleCheckbox(subCategory)}>
                            <div className={style.checkBoxWrap}>
                                <SubcategoryCheckbox isActive={chosenSubcategories.includes(subCategory)}></SubcategoryCheckbox>
                            </div>
                            <p className={style.text}>{subCategory}</p>
                        </li>
                    )
                }))}
            </ul>
            <button className={style.subTitleWrap} onClick={handleOthersCategoriesVisibility}>
                <h3 className={style.searchTitle}>
                    {text.otherCategories} 
                    <div className={style.arrowWrap}>
                        <img className={style.img} src={arrow} alt='' />
                    </div>
                </h3>
            </button>
            <ul className={isOthersCategoriesOpen ? style.otherCategories : style.otherCategoriesClosed}>
                {text.categories.filter((item) => item.categoryName !== category.map((i)=> i.categoryName)[0]).map((category) => {
                    return (
                        <li key={category.id} className={style.subcategoryCheckbox} onClick={() => setChosenSubcategories([])}>
                            <NavLink 
                            key={category.id} 
                            onClick={()=> handleCurCategory(prepareTextToLink(category.categoryName))}
                            className={style.category} 
                            to={`/fototapete/catalog/${prepareTextToLink(category.categoryName)}`} end>
                                <p className={style.categoryName}>{category.categoryName}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className={style.subTitleWrap} onClick={handleColorsVisibility}>
                <h3 className={style.searchTitle}>
                    {text.colorsSubtitle} 
                    <div className={style.arrowWrap}>
                        <img className={style.img} src={arrow} alt='' />
                    </div>
                </h3>
            </button>
            <ul className={isColorsOpen ? style.colorsWrap : style.colorsWrapHidden}>
                {text.colors.map((color) => {
                    return (
                        <li key={color} className={style.colorWrap} onClick={()=> handleColorCheckbox(color)}>
                            <div className={style.checkBoxWrap}>
                                <SubcategoryCheckbox isActive={chosenColors.includes(color)}></SubcategoryCheckbox>
                            </div>
                            <p className={style.text}>{color}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Search