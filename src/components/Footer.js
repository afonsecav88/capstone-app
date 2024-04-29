import React from 'react';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div>
        <img
          src="./Asset 18@4x.png"
          alt="logo footer"
          className="footer-logo-img"
        />
      </div>
      <div className="footer-doormat-navigator">
        <Nav />
      </div>
      <div className="footer-contact">
        <p>Contact</p>
        <ul className='footer-contact-list'>
          <li><img src="/address.svg" alt="Address" /> <p>Calle del Sol, 123 Ciudad Fantasía, CP 12345 País del Sur</p></li>
          <li> <img src="/phone.svg" alt="Phone" />  <p>+123 456 7890</p></li>
          <li> <img src="/email.svg" alt="Mail" />  <p>info@littleLemon.com</p></li>
        </ul>
      </div>
      <div className="footer-social-media">
        <p>Social Media Links</p>
        <ul className="footer-social-media-list">
          <li>
            <img src="/facebook.svg" alt="Facebook" /> @littleLemonrestaurante
          </li>
          <li>
            <img src="/instagram.svg" alt="Instagram" />
            @littleLemon_restaurante
          </li>
          <li>
            <img src="/twitter.svg" alt="Twitter" /> @littleLemon_tw
          </li>
        </ul>
      </div>

      {/* <div>
      <section><p>&copy; Little Lemon Restaurant</p></section>
    </div> */}
    </footer>
  );
};
