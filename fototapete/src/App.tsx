import {  
  Route,
  Routes,
  BrowserRouter } 
from 'react-router-dom';
// import { useState } from 'react';

import MainPage from './components/pages/mainPage/mainPage'
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import CatalogPage from './components/pages/catalog/catalogPage';
import Wallpapers from './components/blocks/wallpapers/wallpapers';
import Category from './components/blocks/category/category';

import './App.scss'
// import { Iproduct } from './components/ui/productPreview/productPreview';

function App() {

  // const [ savedProducts, setSavedProducts ] = useState<Iproduct[]>([])
  

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route index path='*' element={<MainPage />}></Route>
          <Route path='/fototapete/catalog' element={<CatalogPage />}>
            <Route index element={<Wallpapers />} />
            <Route path="/fototapete/catalog/:cid" element={<Category />} />
            {/* <Route
            path="/fototapete/catalog/:cid/:pid"
            element={<ProductPreview />}
            /> */}
          </Route>

          {/* <Route path="/cart">
            {loggedIn ? <CartPage products={products} setProducts={setProducts} /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/product">
            {loggedIn ? <ProductPage  products={products} setProducts={setProducts}/> : <Redirect to="/login" /> }
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Auth setLoggedIn={setLoggedIn} />}
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
