import React, { useReducer } from 'react';
import { UpdateTimesReducer } from '../reducer/UpdateTimesReducer';
import { BookingContext } from './BookingContext';

export const BookingProvider = ({ children }) => {
  const initState = {
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const [state, dispatch] = useReducer(UpdateTimesReducer, initState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
