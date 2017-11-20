import React from 'react';

const Book = ({onClick, title, author, genre,owned}) => (
		<li 
			onClick={onClick}
		>{title}
		</li>
	)