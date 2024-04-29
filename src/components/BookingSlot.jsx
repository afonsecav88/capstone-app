import React, { useContext } from 'react';
import { BookingContext } from './../context/BookingContext';

export const BookingSlot = () => {
  const { state } = useContext(BookingContext);
  return (
    <section className="section-booking-slot">
      <h3>Your reservation Data</h3>
      <div className="section-booking-slot-fields">
        <p className="section-booking-slot-header">Date:</p>{' '}
        <p> {state.date}</p>
      </div>
      <div className="section-booking-slot-fields">
        <p className="section-booking-slot-header">Time: </p>{' '}
        <p>{state.time}</p>
      </div>
      <div className="section-booking-slot-fields">
        <p className="section-booking-slot-header">Guest: </p>
        <p>{state.guests}</p>
      </div>
      <div className="section-booking-slot-fields">
        <p className="section-booking-slot-header">Occasion: </p>
        <p>{state.occasion}</p>
      </div>
    </section>
  );
};
