import {  
  Route,
  Routes,
  BrowserRouter } 
from 'react-router-dom';

import MainPage from './components/pages/mainPage/mainPage'
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import CatalogPage from './components/pages/catalog/catalogPage';
import Wallpapers from './components/blocks/wallpapers/wallpapers';

import './App.scss'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
      {/* // TODO: MAKE ROUTING */}
      {/* Со всех страниц отправляем незалогиненного пользователя на логин, 
        но если залогиненный хочет на эту страницу, отправляем на главную */}
        <Routes>
          <Route index path='/fototapete' element={<MainPage />}></Route>
          <Route path='/fototapete/catalog' element={<CatalogPage />}>
            {/* <Route path=":cid" element={<Category />} /> */}
            <Route index element={<Wallpapers />} />
            {/* <Route path=":cid" element={<Category />} /> */}
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
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
