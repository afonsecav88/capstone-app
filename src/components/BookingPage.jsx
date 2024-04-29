import React from 'react'
import { BookingForm } from './BookingForm';

import { useBookingSlot } from '../hooks/useBookingSlot';
import { BookingSlot } from './BookingSlot';

export const BookingPage = () => {
  useBookingSlot();
  return (
    <section className='section-reservation-form'>
      <BookingForm/>
     { (!useBookingSlot()) && <BookingSlot/>}
    </section> 
  )
}
