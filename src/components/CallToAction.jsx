import React from 'react';
import { Link } from 'react-router-dom';
import { Chicago } from './Chicago';

export const CallToAction = () => {
  return (
    <article className="hero-section">
      <section>
        <Chicago />
        <p>
          We are a family owned Mediterranean restaurant, focused ontraditional
          recipes served whith a modern twist.
        </p>

        <button>
          <Link to="/booking" className="hero-section-button-link">
            Reserve a Table{' '}
          </Link>{' '}
        </button>
      </section>
      <section>
        <img src="./restauranfood.jpg" alt="Call to action" />
      </section>
    </article>
  );
};
