import React, { useReducer } from 'react'
import {BookingContext} from "./BookingContext.js"
import { UpdateTimesReducer } from './../reducer/UpdateTimesReducer';

export const BookingProvider = ({children}) => {
  
  const initState = {
    date:'',
    time: '' ,
    guests: 1,
    occasion: '',
  };

  const [state, dispatch] = useReducer(UpdateTimesReducer, initState);

  return (
   <BookingContext.Provider value={{state, dispatch}}>
    { children }
   </BookingContext.Provider>
  )
}
