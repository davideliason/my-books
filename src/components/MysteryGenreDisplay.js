import React from 'react';

const MysteryGenreDisplay = ({genreFilter,onClick }) => (
	<div>
	  <p>{genreFilter}</p>
	   <button 
	   
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      SHOW MYSTERY
    </button>
	</div>

	)

export default MysteryGenreDisplay