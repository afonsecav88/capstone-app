import React from 'react'
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="footer-section">
    <div>
      <img
        src="./Asset 18@4x.png"
        alt="logo footer"
        className="footer-img"
      />
    </div>
    <div className='footer-doormat-navigator'>
    <Nav/>
    </div>
    <div className='footer-contact'>
    <ul className="py-5 items-center w-64 text-sm text-neutral-700">
      <p className="font-bold">Dirección:</p>
      <p>Calle del Sol, 123 Ciudad Fantasía, CP 12345 País del Sur</p>

      <p className="font-bold mt-5">Teléfono:</p>
      <p>+123 456 7890</p>

      <p className="font-bold mt-5">Correo Electrónico:</p>
      <p>info@littleLemon.com</p>

      <p className="font-bold mt-5">Redes Sociales:</p>
      <li>Facebook: @littleLemonrestaurante</li>
      <li>Instagram: @littleLemon_restaurante</li>
      <li>Twitter: @littleLemon_tw</li>
    </ul>
    </div>
    <div className='footer-social-media'>

    </div>

    {/* <div>
      <section><p>&copy; Little Lemon Restaurant</p></section>
    </div> */}
  </footer>
  )
}
