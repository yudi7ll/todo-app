import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        [id]: {
          content,
          isCompleted: false,
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          isCompleted: !state[id].isCompleted,
        },
      };
    }

    default:
      return state;
  }
};
