import {connect} from 'react-redux';
import BookList from '../components/BookList';

const getFilteredBooks = (books, filter) => {
  switch (filter) {
    case 'SHOW_SCIFI':
      return books.filter(t => t.genre ==="SCIFI" )
    case 'SHOW_MYSTERY':
      return books.filter(t => t.genre ==="MYSTERY")
    case 'SHOW_ALL':
    default:
      return books
  }
}

const mapStateToProps = state => {
  return {
    books: getFilteredBooks(state.books, state.genreFilter)
  }
}

const FilteredBookList = connect(mapStateToProps)(BookList);
export default FilteredBookList;