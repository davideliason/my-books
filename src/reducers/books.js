
const books =(state=[{
  id: 0,
  title:"I, Robot",
  author:"Isaac Asimov",
  genre: "SCIFI",
  owned: false }],action) => {
     switch (action.type){

       case 'ADD_BOOK':
	      return [
	        ...state,
	        {
	          id: action.id,
	          title: action.title,
	          author: action.author,
	          genre: action.genre,
	          owned: action.owned
	        }
	      ]

	   case 'TOGGLE_BOOK':
         return state.map(book =>
        (book.id === action.id) 
          ? {...book, owned: !book.owned}
          : book
      )

     default: 
      return state 
     }
}

export default books




