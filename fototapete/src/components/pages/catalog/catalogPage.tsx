import { Outlet } from "react-router";

import Title from '../../ui/title/title';

import style from './catalogPage.module.scss';

function CatalogPage () {
    return (
        <div className={style.catalogPage}>
            <div className={style.titleWrap}>
                <div className={style.h1Wrap}>
                    <Title text={'CATALOG'} isBlack={true}></Title>
                </div>
                <div className={style.breadCrumbs}>
                    <p className={style.path}>Catalog / Wallpapers</p>
                </div>

                <Outlet />

            </div>
        </div>
    )
}

export default CatalogPage