import React, { useState } from 'react';

import './Order.scss';
import { Link, useNavigate } from 'react-router-dom';

export const Order = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/address');
  };

  return (
    <section className="order  route_section">
      <h1 className="title cart__title">Customer Info</h1>

      <form onSubmit={handleSubmit} className="order__form">
        <input
          className="order__input"
          type="text"
          name="name"

          placeholder="Name"
          value={formData.name}
            onChange={handleChange}
          required

          // type="text"
          //   name="cardNumber"
          //   placeholder="CARD NUMBER"
          //   value={formData.cardNumber
          //     .replace(/\s/g, '')
          //     .replace(/(\d{4})/g, '$1 ')
          //     .trim()}
          //   onChange={handleChange}
        />

        <input
          className="order__input"
          type="tel"
          name="phone"

          placeholder="Phone"
          value={formData.phone}
            onChange={handleChange}
          required
        />

        <input
          className="order__input"
          type="email"
          name="email"

          placeholder="Email"
          value={formData.email}
            onChange={handleChange}
          required
        />
        <button type='submit'
          className="product_card__button cart__checkout_button"
        >
          Next step
        </button>
      </form>
    </section>
  );
};
