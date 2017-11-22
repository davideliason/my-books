import React from 'react';

const Book = ({ title, author, genre,owned }) => (
		<li>
			<h2>{title}</h2>
			<h3>by: {author}</h3>
			<h4>genre: {genre}</h4>
		</li>
	)

export default Book