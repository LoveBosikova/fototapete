import Bestsellers from '../../blocks/bestsellers/bestsellers';
import Categories from '../../blocks/categories/categories';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import Transforming from '../../blocks/transforming/transforming';
import Header from '../../layout/header/header';
import NavBar from '../../layout/navbar/navbar';

import style from './mainPage.module.scss';

function MainPage () {
    return (
        <div className={style.pageWrap}>
            <NavBar></NavBar>
            <header></header>
            <main className={style.main}>
                <Header></Header>
                <MainBilboard></MainBilboard>
                <Bestsellers></Bestsellers>
                <Categories></Categories>
                <Transforming></Transforming>

            </main>
            <footer></footer>
        </div>

    )
}

export default MainPage;