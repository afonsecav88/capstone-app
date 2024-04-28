import React from 'react';
import { testimonialsData } from '../mocks/testimonialsData';

export const CustomersSay = () => {
  return (
    <article className="section-testimonials">
      <div className='section-testimonials-header'>
       <h1>Testimonials</h1>
      </div>
    
    <section className="card-review-container">
      {testimonialsData.map((review) => (
        <section key={review.id} className="card-review">
          <p>Rating : {review.reviewIcon}</p>
          <div className="card-image-testimonial">
            <img src={review.cover} alt="review person" />
            <p>{review.name}</p>
          </div>
          <p>{review.reviewText}</p>
        </section>
      ))}
      </section>
    </article>
  );
};
