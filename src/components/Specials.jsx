import React from 'react';
import { specialsData } from './../mocks/specialsData';

export const Specials = () => {
  return (
    <article className="specials-section">
      <section className="specials-section-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className="specials-section-container">
        {specialsData.map((card) => (
          <div key={card.id} className="specials-section-card">
            <img src={card.cover} alt="icon delivery" className="card-image" />
            <div className="card-header">
              <p>{card.specialName}</p>
              <p id="card-header-price">{card.specialPrice}</p>
            </div>
            <p id="card-description">{card.specialDescription}</p>
            <div className="card-footer">
              <p>{card.specialFooter}</p>
              <p>{card.specialFooterIcon}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
