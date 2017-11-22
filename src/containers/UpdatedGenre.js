import {connect} from 'react-redux';
import GenreDisplay from '../components/GenreDisplay.js';

const mapStateToProps = state => {
	return {
		genreFilter : state.genreFilter
	}
}

const UpdatedGenre = connect(mapStateToProps)(GenreDisplay);

export default UpdatedGenre