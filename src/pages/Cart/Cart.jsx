import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { addToCart, deleteFromCart } from '../../storage/actions/cartActions';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const count = useSelector((state) => state.cart.count);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <>
      {count !== 0 ? (
        <section className="cart route_section">
          <div className="container">
            <h1 className="title cart__title">Shopping Cart</h1>
            <ul className="cart__card__list">
              {cart.map((item) => (
                <li key={item.id} className="cart__card_item">
                  <Link to={`products/${item.id}`} className="cart__card">
                    <div className="cart__card__image_wrapper">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart__card__info_wrapper">
                      <p className="cart__card__info">{item.title}</p>
                      <p className="cart__card__info">{item.price}$</p>
                    </div>
                  </Link>
                  <div className="cart__card__buttons">
                    <button
                      className="cart__card__button"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="cart__card__button"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart__checkout">
              <p className="cart__total">Total: ${total.toFixed(2)}</p>
              <Link
                className="product_card__button cart__checkout_button"
                to={'/order'}
              >
                Go to checkout
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div className="cart__empty">
          <div className="title cart__title">There is nothing here</div>
          <Link className="product_card__button cart__checkout_button" to={'/'}>
            To the main page
          </Link>
        </div>
      )}
    </>
  );
};
