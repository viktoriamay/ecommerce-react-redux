import './Header.scss';
import React from 'react';
import Burger from './img/burger.svg';
import Logo from './img/blvckspace.svg';
import Cart from './img/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const count = useSelector((state) => state.cart.count);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <img src={Burger} alt="" />
          <Link className='header__logo' to={'/'}>
            <img src={Logo} alt="" />
          </Link>
          <Link to={'/cart'} className="header__link">
            <img className="header__icon" src={Cart} alt="" />
            {count !== 0 && <span className="header__count_cart">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};
