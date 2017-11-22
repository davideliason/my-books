import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const SciFiGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	   <Button bsStyle="primary"
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      Sci-Fi
    </Button>
	</div>

	)

export default SciFiGenreDisplay