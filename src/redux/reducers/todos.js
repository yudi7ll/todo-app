import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actionTypes';
import { ALL_TODO } from '../filterTypes';

const initialState = {
  allIds: [],
  items: {},
  filter: ALL_TODO,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        items: {
          ...state.items,
          [id]: {
            content,
            isCompleted: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            isCompleted: !state.items[id].isCompleted,
          },
        },
      };
    }

    case SET_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        filter,
      };
    }

    default:
      return state;
  }
};
