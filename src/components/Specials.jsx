import React from 'react';

export const Specials = () => {
  return (
    <article className="specials-section">
      <section className="specials-section-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className="specials-section-container">
        <div className="specials-section-card">
          <div>
            <img
              src="/greek salad.jpg"
              alt="icon delivery"
              className="card-image"
            />
          </div>
          <div className='card-header'>
            <p>Greek salad</p>
            <p id='card-header-price'>$12.99</p>
          </div>
          <p id='card-description'>
            The famousus greek salad of crispy lettuce,peppers,olves and our
            Chicago style feta cheese,garnishe with crunchy garlic and rosemary
            crountons.
          </p>
          <div className='card-footer'>
            <p>Order a delivery</p>
            <p>🏍</p>
          </div>
        </div>
      </section>
    </article>
  );
};
