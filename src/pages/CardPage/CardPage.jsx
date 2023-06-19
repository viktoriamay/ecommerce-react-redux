import React, { useState } from 'react';
import './CardPage.scss';
import { useNavigate } from 'react-router-dom';

export const CardPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    date: '01/23',
    cvc: '',
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
    <section className="route_section">
      <h1 className="title cart__title">Payment Details</h1>
      <div className="card_page">
        <div className="card_page__template">
          <div className="card_page__template_info__wrapper">
            <span className="card_page__template_info">
              {formData.cardNumber
                ? formData.cardNumber
                : '0000 0000 0000 0000'}
            </span>
            <span className="card_page__template_info">
              {formData.cvc ? formData.cvc : '***'}
            </span>
          </div>
          <div className="card_page__template_info__wrapper">
            <span className="card_page__template_info">
              {formData.name ? formData.name : 'CARD HOLDER'}
            </span>
            <span className="card_page__template_info">
              {formData.date ? formData.date : 'MM/YY'}
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="order__form">
          <input
            className="order__input"
            type="text"
            name="name"
            placeholder="CARD HOLDER"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="order__input"
            type="text"
            name="cardNumber"
            placeholder="CARD NUMBER"
            value={formData.cardNumber
              .replace(/\s/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim()}
            onChange={handleChange}
            maxLength="19"
            required
          />
          <input
            className="order__input"
            type="text"
            name="date"
            value={formData.date
              .replace(/\D/g, '') // удаляем все нецифровые символы
              .replace(/(\d{2})(\d{0,2})/, '$1/$2') // форматируем ввод в формат "00/00"
              .trim()}
            placeholder="MM/YY"
            onChange={handleChange}
            maxLength={5}
            required
          />
          <input
            className="order__input"
            type="password"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            value={formData.cvc}
            onChange={handleChange}
            required
          />
          <button
            className="product_card__button cart__checkout_button"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </section>
  );
};
