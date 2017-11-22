import {connect} from 'react-redux';
import MysteryGenreDisplay from '../components/MysteryGenreDisplay.js';

const mapStateToProps = state => {
	return {
		genreFilter : state.genreFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type: 'SET_GENRE_FILTER', filter: 'SHOW_MYSTERY'})
  }
})

const UpdateMysteryGenre = connect(mapStateToProps, mapDispatchToProps)(MysteryGenreDisplay);

export default UpdateMysteryGenre