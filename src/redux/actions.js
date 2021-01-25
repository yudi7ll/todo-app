import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './actionTypes';

let currentId = 0;

/* eslint-disable no-plusplus */
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: currentId++,
    content,
  },
});
/* eslint-enable */

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});
