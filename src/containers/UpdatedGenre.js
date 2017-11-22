import {connect} from 'react-redux';
import GenreDisplay from '../components/GenreDisplay.js';

const mapStateToProps = state => {
	return {
		genreFilter : state.genreFilter
	}
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch({type: 'SET_GENRE_FILTER', filter: 'SHOW_SCIFI' })
  }
})



const UpdatedGenre = connect(mapStateToProps, mapDispatchToProps)(GenreDisplay);

export default UpdatedGenre