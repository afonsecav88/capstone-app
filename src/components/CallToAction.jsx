import React from 'react';

export const CallToAction = () => {
  return (
    <article className="hero-section">
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused ontraditional
          recipes served whith a modern twist.
        </p>
        <button>Reserve a Table</button>
      </section>
      <section>
        <img src='./restauranfood.jpg' alt='Call to action'/>
      </section>
    </article>
  );
};
