import React from 'react';

import './Order.scss';
import { Link, useNavigate } from 'react-router-dom';

export const Order = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/card');
  };

  return (
    <section className="order  route_section">
      <h1 className="title cart__title">Customer Info</h1>

      <form onSubmit={onSubmit} className="order__form">
        <input
          className="order__input"
          type="text"
          placeholder="Name"
          required
        />

        <input
          className="order__input"
          type="tel"
          placeholder="Phone"
          required
        />

        <input
          className="order__input"
          type="email"
          placeholder="Email"
          required
        />
        <Link
          to={'/card'}
          className="product_card__button cart__checkout_button"
        >
          {' '}
          Next step
        </Link>
      </form>
    </section>
  );
};
