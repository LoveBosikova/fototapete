import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import textData from '../../../texts';

import style from './productPage.module.scss';
import ProductInfo from '../../ui/productInfo/productInfo';
import QuestionsProduct from '../../blocks/questionsProduct/questionsProduct';

function ProductPage () {
    // TODO : make try if there is no product fit this pid
    let { pid = 0 } = useParams() // get product Id 
    console.log(pid)

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].productPage // get the productPage texts
    

    const product = textData[langValue as keyof typeof textData].catalog.products.find((product) => product.id === +pid) // get the products arr
    console.log(product);

    return (
        <div className={style.productPage}>
            <div className={style.breadCrumbs}>
                <p className={style.path}>
                    {`${text.breadcrumbs} ${product?.category} / ${product?.name}`}
                </p>
            </div>
            <div className={style.productInfoWrap}>
                <ProductInfo 
                product={product} 
                note={text.note} 
                material={text.material} 
                instructions={text.instructions}>
                </ProductInfo>
            </div>
            <QuestionsProduct />

        </div>
    )
}

export default ProductPage