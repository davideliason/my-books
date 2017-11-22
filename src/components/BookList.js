import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => (
      <Book key={index} {...book}  />
    ))}
  </ul>
)

export default BookList