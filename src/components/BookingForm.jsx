import { React, useContext } from 'react';
import { BookingContext } from './context/BookingContext';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const availableOccasion = ['Birthday', 'Anniversary'];

export const BookingForm = () => {
  const { state, dispatch } = useContext(BookingContext);

  const {time,guests,date,occasion} = state;

  console.log('Mostrando el estado', state);

  const onChange = (event) => {
    dispatch({
      type: 'change_time',
      time: event.target.value,
    });
  };
  //   const resetForm = () => {
  //     setFormData({ ...initState });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'update_reservation',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={onChange}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" name="time" onChange={onChange} multiple={false}>
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        onChange={onChange}
        value={guests}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={onChange}
        multiple={false}
      >
        {availableOccasion.map((occasion, index) => (
          <option key={index}>{occasion}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
