import { React, useContext,useState } from 'react';
import { BookingContext } from '../context/BookingContext';


const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const availableOccasion = ['Birthday', 'Anniversary'];

export const BookingForm = () => {
  const initState = {
    date:'',
    time: '17:00' ,
    guests: 1,
    occasion: 'Birthday',
  };
  const [ formData, setFormData ] = useState(initState);
  const {  dispatch } = useContext(BookingContext);
    
  const {guests,date} = formData;

  const onChange = (event ) => {
      setFormData( prev => ({
          ...prev,
          [event.target.name]: event.target.value
      }))
  }

  const resetForm = () => {
      setFormData({ ...initState })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'update_reservation',
      ...formData
    });
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor="date" aria-label="Select date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={onChange}
        required
      />

      <label htmlFor="time" aria-label="Select time">Choose time</label>
      <select id="time" name="time" onChange={onChange} multiple={false} required>
        {availableTimes.map((times, index) => (
          <option key={index} value={times}>{times}</option>
        ))}
      </select>

      <label htmlFor="guests" aria-label="Select guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        onChange={onChange}
        value={guests}
        required
      />

      <label htmlFor="occasion" aria-label="Select Occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={onChange}
        multiple={false}
        required
      >
        {availableOccasion.map((occasions, index) => (
          <option key={index}>{occasions}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
