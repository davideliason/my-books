import React from 'react';

const AddBook = ({ onSubmit }) => (
		<form
		  onSubmit={e => {
		  	e.preventDefault()
		  	onSubmit(e)
		  }}
		>
		 <input placeholder="Ttile" />
		 // <input placeholder="Author" />
		 // <input placeholder="Genre" />
		 // <input placeholder="Owned" />
         <input type="submit" value="Submit" />
    </form>
	)

export default AddBook