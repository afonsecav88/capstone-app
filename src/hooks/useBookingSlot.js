import { useContext } from 'react';
import { BookingContext } from './../context/BookingContext';

export const useBookingSlot = () => {
  const { state } = useContext(BookingContext);
  let isEmpty;
  for (const item of Object.keys(state)) {
    if (state[item].length === 0) {
      let flat = true;
      isEmpty = flat;
    }
  }
  return isEmpty;
};
