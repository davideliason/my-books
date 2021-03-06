import ActionTypes from '../constants/action_types.js';
let nextId = 2;

export const addBook = (title,author,genre,owned) => ({
  type: 'ADD_BOOK',
  id: nextId++,
  title,
  author,
  genre,
  owned
})

export const setGenreFilter = (filter) => ({
  type: 'SET_GENRE_FILTER',
  filter
})

export const toggleBook = (id) => ({
  type: 'TOGGLE_BOOK',
  id
})
