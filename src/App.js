// App.js
import React from 'react';
import BookList from './components/BookList'; // Update this path
import AuthorList from './components/AuthorList'; // Update this path
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Library Management System</h1>
      </header>
      <main>
        <BookList />
        <AuthorList />
      </main>
    </div>
  );
}

export default App;
