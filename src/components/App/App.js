import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Products } from '../../pages/Products/Products';
import { Product } from '../../pages/Product/Product';
import { Cart } from '../../pages/Cart/Cart';
import { Order } from '../../pages/Order/Order';
import './App.scss';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../storage/actions/productsActions';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { CardPage } from '../../pages/CardPage/CardPage';
import { Address } from '../../pages/Address/Address';
import { Footer } from '../Footer/Footer';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Products />
              </>
            }
          />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />}></Route>
          <Route path="/card" element={<CardPage />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
