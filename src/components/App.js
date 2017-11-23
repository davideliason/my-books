import React, { Component } from 'react';
import './App.css';
import FilteredBookList from '../containers/FilteredBookList';
import UpdateMysteryGenre from '../containers/UpdateMysteryGenre.js';
import UpdateSciFiGenre from '../containers/UpdateSciFiGenre.js';
import UpdateShowAllGenre from '../containers/UpdateShowAllGenre.js';
import {Jumbotron,ButtonToolbar, ButtonGroup,Grid, Row, Col} from 'react-bootstrap';
import AddBookContainer from '../containers/AddBookContainer.js';
class App extends Component {
  render() {

    return (
      <div className="App">
      	<Grid>
      	  <Row>
      	  	<Col xs={4}>
      	 	  <UpdateMysteryGenre />
      	 	</Col>
      	 	<Col xs={4}>
      	 	  <UpdateSciFiGenre />
      	 	</Col><Col xs={4}>
      	 	  <UpdateShowAllGenre />
      	 	</Col>
      	  </Row>
      	 </Grid>
      	 <Row>
      	 	<Jumbotron>
      	 		<p>Favorite Books</p>
      	 	</Jumbotron>

      	 </Row>
     	 <FilteredBookList />
     	 <AddBookContainer />


      </div>
    );
  }
}

export default App;
