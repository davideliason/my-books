const genreFilter = (state = 'SHOW_SCIFI', action) => {
  switch (action.type) {
    case 'SET_GENRE_FILTER':
      return Object.assign({},state,{
      	genreFilter: action.filter
      })
    default:
      return state
  }
}

export default genreFilter
