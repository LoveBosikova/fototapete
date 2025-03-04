import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import { CurCategoryContext } from '../../../context/curCategoryContext';

import ProductPreview from '../../ui/productPreview/productPreview';

import textData from '../../../texts';

import style from './recomendations.module.scss';
import Title from '../../ui/title/title';

function Recomendations () {
    const { lang } = useContext(LangContext)
    const { curCategory } = useContext(CurCategoryContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].catalog
    const textProductPage = textData[langValue as keyof typeof textData].productPage


    return (
        <section className={style.recomendations}>
            <div className={style.titleWrap}>
                <Title text={textProductPage.alsoLikeTitle} isBlack={true}></Title>
            </div>
            <ul className={style.productsWrap}>

                {curCategory ? 
                text.products.filter((product) => product.category === curCategory).slice(0,6).map((selectedProduct) => <div className={style.productWrap}>
                                                                                                                            <ProductPreview 
                                                                                                                            categoryName={curCategory} 
                                                                                                                            product={selectedProduct}>
                                                                                                                            </ProductPreview>
                                                                                                                        </div>)
                :
                text.products.slice(0,6).map((selectedProduct) =>   <div className={style.productWrap}>
                                                                        <ProductPreview 
                                                                        categoryName={curCategory} 
                                                                        product={selectedProduct}>
                                                                        </ProductPreview>
                                                                    </div>) 
                }

            </ul>
        </section>
    )
}

export default Recomendations