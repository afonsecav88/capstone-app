import { React, useState } from 'react';

export const BookingForm = () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const availableOccasion = ['Birthday', 'Anniversary'];

  const initState = {
    date: new Date("yyyy-MM-dd"),
    time: availableTimes,
    guests: 1,
    occasion: availableOccasion,
  };

  const [formData, setFormData] = useState(initState);

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
   console.log(formData);
  };

  console.log({formData});

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
        value={formData.date}
        onChange={onChange}
      />
      
      <label htmlFor="time">Choose time</label>
      <select id="time" name="time"  onChange={onChange}  multiple={false}>
        {availableTimes.map((time,index) => (
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
        value={formData.guests}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion"  
        onChange={onChange} multiple={false}>
        {availableOccasion.map((occasion,index) => (
          <option key={index}>{occasion}</option>
        ))}    
      </select>
      <input type="submit" value="Make Your reservation"/>
    </form>
  );
};
