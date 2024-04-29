import { React, useContext, useState } from 'react';
import { BookingContext } from '../context/BookingContext';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const availableOccasion = ['Birthday', 'Anniversary'];

export const BookingForm = () => {
  const initState = {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  };
  const [formData, setFormData] = useState(initState);
  const { dispatch } = useContext(BookingContext);

  const { guests, date } = formData;

  const onChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'update_reservation',
      ...formData,
    });
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      className="reservation-form"
    >
      <label
        className="section-reservation-label"
        htmlFor="date"
        aria-label="Select date"
      >
        Choose date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={onChange}
        required
        className="reservation-input-date"
      />

      <label
        className="section-reservation-label"
        htmlFor="time"
        aria-label="Select time"
      >
        Choose time:
      </label>
      <select
        id="time"
        name="time"
        onChange={onChange}
        multiple={false}
        required
        className="reservation-select-times"
      >
        {availableTimes.map((times, index) => (
          <option key={index} value={times}>
            {times}
          </option>
        ))}
      </select>

      <label
        className="section-reservation-label"
        htmlFor="guests"
        aria-label="Select guests"
      >
        Number of guests:
      </label>
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
        className="reservation-input-guests"
      />

      <label
        className="section-reservation-label"
        htmlFor="occasion"
        aria-label="Select Occasion"
      >
        Occasion:
      </label>
      <select
        id="occasion"
        name="occasion"
        onChange={onChange}
        multiple={false}
        required
        className="reservation-select-occasion"
      >
        {availableOccasion.map((occasions, index) => (
          <option key={index}>{occasions}</option>
        ))}
      </select>
      <input
        className="reservation-form-button"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};
