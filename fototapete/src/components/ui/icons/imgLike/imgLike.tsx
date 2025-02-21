import likeImg from '../../../../assets/like-icon.svg';
import likeActiveImg from '../../../../assets/likeActive-icon.svg';

import style from './imgLike.module.scss';

type IImgLikeProps = {
    isActive: boolean;
}

function ImgLike (props: IImgLikeProps) {
    return (
        <button className={style.imgLike}>
            <img className={style.img} src={props.isActive? likeActiveImg : likeImg} alt='like' />
        </button>
    )
}

export default ImgLike