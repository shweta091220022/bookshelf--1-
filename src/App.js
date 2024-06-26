import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
        if (storedBookshelf) {
            setBookshelf(storedBookshelf);
        }
    }, []);

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />} />
                <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
            </Routes>
        </Router>
    );
};

export default App;
