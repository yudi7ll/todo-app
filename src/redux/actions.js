import {
  ADD_TODO, CLEAR_COMPLETED_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO,
} from './actionTypes';

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

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const clearCompletedTodo = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});
