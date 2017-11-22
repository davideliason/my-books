import {connect} from 'react-redux';
import SciFiGenreDisplay from '../components/SciFiGenreDisplay.js';

const mapStateToProps = state => {
	return {
		genreFilter : state.genreFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type: 'SET_GENRE_FILTER', filter: 'SHOW_SCIFI'})
  }
})

const UpdateSciFiGenre = connect(mapStateToProps, mapDispatchToProps)(SciFiGenreDisplay);

export default UpdateSciFiGenre