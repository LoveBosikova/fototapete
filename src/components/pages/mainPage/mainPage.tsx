import Bestsellers from '../../blocks/bestsellers/bestsellers';
import Calculate from '../../blocks/calculate/calculate';
import Categories from '../../blocks/categories/categories';
import CommonQuestions from '../../blocks/commonQuestions/commonQuestions';
import HelpfulArticles from '../../blocks/helpfulArticles/helpfulArticles';
import HowPlaceOrder from '../../blocks/howPlaceOrder/howPlaceOrder';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import OrderingProcess from '../../blocks/orderingProcess/orderingProcess';
import Subscribe from '../../blocks/subscribe/subscribe';
import Transforming from '../../blocks/transforming/transforming';
import WallpapersInInteriors from '../../blocks/wallpapersInInteriors/wallpapersInInteriors';

import style from './mainPage.module.scss';

function MainPage () {
    return (
        <div className={style.pageWrap}>
            <main className={style.main}>
                <MainBilboard />
                <Bestsellers />
                <Categories />
                <Transforming />
                <Calculate />
                <HowPlaceOrder />
                <WallpapersInInteriors />
                <OrderingProcess />
                <CommonQuestions />
                <Subscribe />
                <HelpfulArticles />
            </main>
        </div>
    )
}

export default MainPage;