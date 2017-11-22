import {connect} from 'react-redux';
import ShowAllGenreDisplay from '../components/ShowAllGenreDisplay.js';

const mapStateToProps = state => {
	return {
		genreFilter : state.genreFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type: 'SET_GENRE_FILTER', filter: 'SHOW_ALL'})
  }
})

const UpdateShowAllGenre = connect(mapStateToProps, mapDispatchToProps)(ShowAllGenreDisplay);

export default UpdateShowAllGenre