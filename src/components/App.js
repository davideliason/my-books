import React, { Component } from 'react';
import './App.css';
import FilteredBookList from '../containers/FilteredBookList';

class App extends Component {
  render() {

    return (
      <div className="App">
     	 <FilteredBookList />
      </div>
    );
  }
}

export default App;
