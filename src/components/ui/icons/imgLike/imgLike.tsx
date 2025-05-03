import { useUnit } from 'effector-react';
import likeImg from '../../../../assets/like-icon.svg';
import likeActiveImg from '../../../../assets/likeActive-icon.svg';
import { $favourites, createIsProductFavourite, toggleFavouriteProduct } from '../../../pages/cart/model';
import { Iproduct } from '../../productPreview/productPreview';

import style from './imgLike.module.scss';

type ImgLikeProps = {
    product: Iproduct;
};

function ImgLike({ product }: ImgLikeProps) {
    const isFavourite$ = createIsProductFavourite(product.id);
    const isFavourite = useUnit(isFavourite$);
    const toggle = useUnit(toggleFavouriteProduct);

    const favourites = useUnit($favourites)
    console.log(favourites);

    return (
    <button
        className={style.imgLike}
        onClick={() => toggle(product)}
    >
        <img
            className={style.img}
            src={isFavourite ? likeActiveImg : likeImg}
            alt="like"
        />
    </button>
    );
}

export default ImgLike