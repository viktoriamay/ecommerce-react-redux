import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../storage/actions/cartActions';

export const Card = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="product_card">
      <Link to={`/product/${product.id}`} className="product_card__link">
        <div className="product_card__img_wrapper">
          <img src={product.image} alt="" />
        </div>

        <h3 className="product_card__title">{product.title}</h3>
        <span className="product_card__info">{product.price}$</span>
      </Link>
      <button
        onClick={() => addProductToCart(product)}
        className="product_card__button"
      >
        Add to cart
      </button>
    </div>
  );
};
