import React from 'react';

const ShowAllGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	   <button 
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      All
    </button>
	</div>

	)

export default ShowAllGenreDisplay