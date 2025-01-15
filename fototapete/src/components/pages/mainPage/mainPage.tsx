import Bestsellers from '../../blocks/bestsellers/bestsellers';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
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

            </main>
            <footer></footer>
        </div>

    )
}

export default MainPage;