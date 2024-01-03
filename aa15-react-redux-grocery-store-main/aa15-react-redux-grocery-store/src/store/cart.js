const POPULATE = 'cart/POPULATE';

//action creator
export const populateCart = (id) => {
  return {
    type: POPULATE,
    id,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = { ...state };
      newState[action.id] = { id: action.id, count: 1 };
      return newState;
    }
    default:
      return state;
  }
}
