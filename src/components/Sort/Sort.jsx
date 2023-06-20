import React, { useState } from 'react';
import './Sort.scss';
import { useDispatch } from 'react-redux';
import {
  sortProductsByName,
  sortProductsByPrice,
} from '../../storage/actions/productsActions';

export const Sort = () => {
  const [sortPrice, setSortPrice] = useState('asc');
  const [sortName, setSortName] = useState('asc');

  const dispatch = useDispatch();

  const handleSortPrice = () => {
    const newOrder = sortPrice === 'asc' ? 'desc' : 'asc';
    setSortPrice(newOrder);
    dispatch(sortProductsByPrice(newOrder));
  };

  const handleSortName = () => {
    const newOrder = sortName === 'asc' ? 'desc' : 'asc';
    setSortName(newOrder);
    dispatch(sortProductsByName(newOrder));
  };

  return (
    <div className="sort">
      <div className="sort__buttons">
        <button
          className="sort__button product_card__button cart__checkout_button"
          onClick={handleSortPrice}
        >
          Sort by price {sortPrice === 'asc' ? '▲' : '▼'}
        </button>
        <button
          className="sort__button product_card__button cart__checkout_button"
          onClick={handleSortName}
        >
          Sort by name {sortName === 'asc' ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};
