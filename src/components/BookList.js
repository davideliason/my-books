import React from 'react';
import Book from './Book';

const BookList = ({ books, onBookClick }) => (
  <ul>
    {books.map((book, index) => (
      <Book key={index} {...book} onClick={() => onBookClick(index)} />
    ))}
  </ul>
)

export default BookList