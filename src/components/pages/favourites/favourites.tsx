import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";
import ProductPreview from "../../ui/productPreview/productPreview";
import { $favourites } from "../cart/model";
import { useUnit } from "effector-react";
import Title from "../../ui/title/title";
import textData from "../../../texts"; 
import LinkButtonOrange from "../../ui/buttons/linkButton/linkButtonOrange";

import style from './favourites.module.scss';

function Favourites () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].favourites
    const btnText = textData[langValue as keyof typeof textData].btns

    const favourites = useUnit($favourites)

    return (
        <div className={style.favourites}>
            <Title text={text.title} isBlack={true}/>
            <div className={style.contentWrap}>
                <ul className={style.results}>
                    {favourites.length ? favourites.map((product) => 
                                        <div 
                                        key={product.product.id} 
                                        className={style.productWrap}
                                        >
                                            <ProductPreview 
                                            product={product.product} 
                                            categoryName={""}
                                            >
                                            </ProductPreview>
                                        </div>) 
                                        : 
                                        <div className={style.noWrap}>
                                            <div className={style.noFavourites}>{text.noFavourites}</div>
                                            <div className={style.btnWrap}>
                                                <LinkButtonOrange text={btnText.catalog} link={`/catalog`}></LinkButtonOrange>
                                            </div>
                                        </div>
                                        }
                </ul>
            </div>
        </div>
    )
}

export default Favourites