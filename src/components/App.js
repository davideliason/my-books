import React, { Component } from 'react';
import './App.css';
import FilteredBookList from '../containers/FilteredBookList';
import UpdatedGenre from '../containers/UpdatedGenre.js';

class App extends Component {
  render() {

    return (
      <div className="App">
     	 <FilteredBookList />
     	 <UpdatedGenre />
      </div>
    );
  }
}

export default App;
