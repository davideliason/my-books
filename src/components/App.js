import React, { Component } from 'react';
import './App.css';
import FilteredBookList from '../containers/FilteredBookList';
import UpdateMysteryGenre from '../containers/UpdateMysteryGenre.js';

class App extends Component {
  render() {

    return (
      <div className="App">
     	 <FilteredBookList />
     	 <UpdateMysteryGenre />
      </div>
    );
  }
}

export default App;
