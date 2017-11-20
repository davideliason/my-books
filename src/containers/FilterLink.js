import { connect } from 'react-redux'
import { setGenreFilter } from '../actions'
import LinkFilter from '../components/LinkFilter'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setGenreFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapDispatchToProps
)(Link)

export default FilterLink