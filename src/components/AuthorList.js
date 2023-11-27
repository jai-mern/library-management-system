// AuthorList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    // Fetch authors from the mock API or JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/authors')
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching authors:', error);
      });
  }, []);

  const handleEditAuthor = (author) => {
    setSelectedAuthor(author);
  };

  const handleDeleteAuthor = (id) => {
    // Implement delete author logic
  };

  const handleAuthorSubmit = (values, { resetForm }) => {
    // Implement add/edit author logic
    if (selectedAuthor) {
      // Edit author
    } else {
      // Add author
    }

    // Reset the form
    resetForm();
    setSelectedAuthor(null);
  };

  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name} - {author.birthDate}{' '}
            <button onClick={() => handleEditAuthor(author)}>Edit</button>{' '}
            <button onClick={() => handleDeleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add/Edit Author</h2>
      <AuthorForm initialValues={selectedAuthor || {}} onSubmit={handleAuthorSubmit} />
    </div>
  );
};

export default AuthorList;
