import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import style from './mainPage.module.scss';

function MainPage () {
    return (
        <div className={style.pageWrap}>
            <header></header>
            <main className={style.main}>
                <MainBilboard></MainBilboard>

            </main>
            <footer></footer>
        </div>

    )
}

export default MainPage;