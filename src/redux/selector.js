import { ALL_TODO, ACTIVE_TODO, COMPLETED_TODO } from './filterTypes';

function getAllTodos(todos) {
  return todos.allIds.map((id) => ({ ...todos.items[id], id }));
}

function getActiveTodos(todos) {
  return getAllTodos(todos).filter((items) => !items.isCompleted);
}

function getCompletedTodos(todos) {
  return getAllTodos(todos).filter((items) => items.isCompleted);
}

export default (todos) => {
  switch (todos.filter) {
    case ACTIVE_TODO:
      return getActiveTodos(todos);
    case COMPLETED_TODO:
      return getCompletedTodos(todos);
    case ALL_TODO:
      return getAllTodos(todos);
    default:
      return getAllTodos(todos);
  }
};
