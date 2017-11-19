import {connect} from 'react-redux';
import App from '../components/App.js';

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
