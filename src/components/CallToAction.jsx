import React from 'react';
import { Chicago } from './Chicago';

export const CallToAction = () => {
  return (
    <article className="hero-section">
      <section>
        <Chicago/>
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
