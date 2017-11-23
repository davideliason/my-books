import React from 'react';
import Button from 'react-bootstrap/lib/Button';


const ShowAllGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	   <Button bsSize="large" bsStyle="success"
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      All
    </Button>
	</div>

	)

export default ShowAllGenreDisplay