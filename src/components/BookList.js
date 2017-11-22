import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
 <div>
  <ul>
    {books.map((book, index) => (
      <Book key={index} {...book}  />
    ))}
  </ul>
 </div>
)

export default BookList