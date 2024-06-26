import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookSearchPage = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const res = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(res.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
            <div className="results">
                {results.map((book, index) => (
                    <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearchPage;
