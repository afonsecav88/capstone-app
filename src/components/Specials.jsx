import React from 'react';

export const Specials = () => {
  return (
    <article className="specials-section">
      <section className="specials-section-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className="specials-section-cards">
        <div className="specials-card">
          <div>
            <img
              src="/greek salad.jpg"
              alt="icon delivery"
              className="card-image"
            />
            <p>$12.99</p>
          </div>
          <p id='card-description'>
            The famousus greek salad of crispy lettuce,peppers,olves and our
            Chicago style feta cheese,garnishe with crunchy garlic and rosemary
            crountons.
          </p>
          <div>
            <p>Order a delivery</p>
            <p>🏍</p>
          </div>
        </div>
      </section>
    </article>
  );
};
