import {connect} from 'react-redux';
import GenreSetter from '../components/GenreSetter.js';


const mapDispatchToProps = {
  updateGenre: dispatch({type:'SET_GENRE_FILTER',filter:'SHOW_SCIFI'})
}

const GenreContainer = connect(
  mapDispatchToProps
)(GenreSetter)

export default GenreContainer
