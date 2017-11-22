import React from 'react';

const GenreDisplay = ({genreFilter,onClick }) => (
	<div>
	  <p>{genreFilter}</p>
	   <button 
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      click
    </button>
	</div>

	)

export default GenreDisplay