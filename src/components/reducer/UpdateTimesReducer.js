export const UpdateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'change_time': {
      return {
        ...state,
        time: state.time,
      };
    }
    case 'update_reservation': {
      return {
        ...state,
        date: action.date,
        time: action.time,
        guests: action.guests,
        occasion: action.occasion,
      };
    }
    default: {
      return state;
    }
  }
};
