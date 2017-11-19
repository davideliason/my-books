import ActionTypes from '../constants/action_types';

export function booksReducer(state=[{
  title:"I, Robot",
  author:"Isaac Asimov",
  genre: "Science Fiction",
  owned: false}],action) => {
  switch (action.type){

    default: 
      return state 
  }
}

export default booksReducer


