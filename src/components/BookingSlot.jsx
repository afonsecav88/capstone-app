import React ,{useContext} from 'react'
import { BookingContext } from './../context/BookingContext';

export const BookingSlot = () => {
  const { state } = useContext(BookingContext);
  return (
   <section>
    <p>Your reservation Data</p>
     <p>Date: {state.date}</p>
     <p>Time: {state.time}</p>
     <p>Guest: {state.guests}</p>
     <p>Occasion: {state.occasion}</p>
   </section>
  )
}
