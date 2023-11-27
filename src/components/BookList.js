// BookList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch books from the mock API or JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleEditBook = (book) => {
    setSelectedBook(book);
  };

  const handleDeleteBook = (id) => {
    // Implement delete book logic
  };

  const handleBookSubmit = (values, { resetForm }) => {
    // Implement add/edit book logic
    if (selectedBook) {
      // Edit book
    } else {
      // Add book
    }

    // Reset the form
    resetForm();
    setSelectedBook(null);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}{' '}
            <button onClick={() => handleEditBook(book)}>Edit</button>{' '}
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add/Edit Book</h2>
      <BookForm initialValues={selectedBook || {}} onSubmit={handleBookSubmit} />
    </div>
  );
};

export default BookList;
