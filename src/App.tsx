import {  
  Route,
  Routes
  } 
from 'react-router-dom';

import MainPage from './components/pages/mainPage/mainPage'
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import CatalogPage from './components/pages/catalog/catalogPage';
import Wallpapers from './components/blocks/wallpapers/wallpapers';
import Category from './components/blocks/category/category';
import ProductPage from './components/pages/productPage/productPage';
import CartPage from './components/pages/cart/cartPage';
import OrderPage from './components/pages/orderPage/orderPage';
import InfoPage from './components/pages/infoPage/infoPage';
import MaterialsPage from './components/pages/materialsPage/materialsPage';
import Favourites from './components/pages/favourites/favourites';
import './App.scss'
import BlogPage from './components/pages/blog/blogPage';
import BlogArticlePage from './components/pages/blogArticlePage/BlogArticlePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<MainPage />} />
        <Route path='/:pid' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/materials' element={<MaterialsPage />} />
        {/* <Route path='/blog' element={<BlogPage />} />
         */}
        <Route path='/blog' element={<BlogPage />}>
          {/* <Route path=':id' element={<BlogArticlePage />} /> */}
        </Route>
        <Route path='/blog/:id' element={<BlogArticlePage />} />
        <Route path='/catalog' element={<CatalogPage />}>
          <Route index element={<Wallpapers />} />
          <Route path=':cid' element={<Category />} />
        </Route>
        <Route path='*' element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
