
const books =(state=[{
  title:"I, Robot",
  author:"Isaac Asimov",
  genre: "Science Fiction",
  owned: false}],action) => {
     switch (action.type){

       case 'ADD_BOOK':
	      return [
	        ...state,
	        {
	          title: action.title,
	          author: action.author,
	          genre: action.genre,
	          owned: action.owned
	        }
	      ]

     default: 
      return state 
     }
}

export default books




