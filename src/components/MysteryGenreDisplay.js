import React from 'react';
import Button from 'react-bootstrap/lib/Button';


const MysteryGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	   <Button bsStyle="info"
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      MYSTERY
    </Button>
	</div>

	)

export default MysteryGenreDisplay