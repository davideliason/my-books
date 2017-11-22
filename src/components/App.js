import React, { Component } from 'react';
import './App.css';
import FilteredBookList from '../containers/FilteredBookList';
import UpdateMysteryGenre from '../containers/UpdateMysteryGenre.js';
import UpdateSciFiGenre from '../containers/UpdateSciFiGenre.js';

class App extends Component {
  render() {

    return (
      <div className="App">
     	 <FilteredBookList />
     	 <UpdateMysteryGenre />
     	 <UpdateSciFiGenre />

      </div>
    );
  }
}

export default App;
