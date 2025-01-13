import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import Header from '../../layout/header/header';
import style from './mainPage.module.scss';

function MainPage () {
    return (
        <div className={style.pageWrap}>
            <header></header>
            <main className={style.main}>
                <Header></Header>
                <MainBilboard></MainBilboard>

            </main>
            <footer></footer>
        </div>

    )
}

export default MainPage;