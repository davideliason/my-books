import React from 'react';

const SciFiGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	   <button 
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      Sci-Fi
    </button>
	</div>

	)

export default SciFiGenreDisplay