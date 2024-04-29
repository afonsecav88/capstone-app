import React from 'react';
import { Chicago } from './Chicago';

export const About = () => {
  return (
    <article className="about-container">
      <div>
        <Chicago />
        <p>
          In our kitchen, each ingredient is treated with the utmost respect and
          care. From fresh vegetables to exotic spices, we try to select the
          best products for each dish. This dedication to quality is reflected
          in the flavor and freshness of our creations.
        </p>
      </div>

      <section className='section-about-image'>
        <div className='about-chef-image-container'>
        <img className='about-chef-image1' src="/Mario and Adrian A.jpg" alt="chef restaurant" />
        <img className='about-chef-image2' src="/restaurant.jpg" alt="cheft restaurant in action" />
        </div>
      </section>
    </article>
  );
};
