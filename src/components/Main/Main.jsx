import './Main.scss';
import React from 'react';

export const Main = () => {
  return (
    <section className="main_page">
      <div className="container">
        <div className="main_page__wrapper">
          <div className="main_page__title_wrapper">
            <h1 className="main_page__title">Fall collection is out here</h1>
            <span className="main_page__subtitle">
              {new Date().getFullYear().toString().slice(2, 5)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
