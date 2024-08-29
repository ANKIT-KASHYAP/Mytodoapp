import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MEARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionType";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});
export const markComplete = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MEARK_INCOMPLETE,
  payload: { id },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});
