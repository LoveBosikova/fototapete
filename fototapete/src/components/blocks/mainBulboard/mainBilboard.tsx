import Handwriting from '../../ui/handwriting/handwriting';
import Title from '../../ui/title/title';
import style from './mainBilboard.module.scss';

function MainBilboard () {
    return (
        <div className={style.wrap}>
            <div className={style.textWrap}>
                <Title text={'Transform your interior with our custom photo wallpapers!'} isBlack={false}></Title>
                <div className={style.handwritingWrap}>
                    <Handwriting color={'white'} text='You imagine'></Handwriting>
                    <Handwriting color={'white'} text='we make it happen!'></Handwriting>
                </div>
            </div>
        </div>
    )
}

export default MainBilboard